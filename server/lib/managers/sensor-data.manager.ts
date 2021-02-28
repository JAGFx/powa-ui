/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	sensor-data.manager.ts
 * Date: 	20/02/2021
 * Time: 	21:28
 */
import { Database } from '../config/database';
import moment = require('moment');

export class SensorDataManager extends Database {
	public create( sensorName: string, value: number, date: string ) {
		const q = 'INSERT INTO sensor_data (sensor_id, value, created_at) VALUES (?, ?, ?)';
		const p = [
			sensorName,
			value,
			date
		];
		
		return this.addQuery( q, p );
	}
	
	// ---
	
	public getStatsOfThisDay( target: string ) {
		const q = 'SELECT HOUR( sd.created_at ) as hour, ROUND( AVG( sd.value ), 1 ) as value\n' +
		          'FROM sensor_data sd\n' +
		          'WHERE sd.sensor_id = ?\n' +
		          '  AND DATE( sd.created_at ) = ?\n' +
		          'GROUP BY HOUR( sd.created_at )';
		const p = [
			target,
			moment().format( 'YYYY-MM-DD' )
		];
		
		return this.addQuery( q, p )
		           .flush();
	}
	
	
	public getStatsByMonth( target: string ) {
		const q = 'SELECT ROUND( AVG(sd.value), 1 ) as avg, ROUND( MIN(sd.value), 1 ) as min, ROUND( MAX(sd.value), 1 ) as max\n' +
		          'FROM sensor_data sd\n' +
		          'WHERE sd.sensor_id = ?\n' +
		          '  AND MONTH( sd.created_at ) = ?';
		const p = [
			target,
			moment().format( 'MM' )
		];
		
		return this.addQuery( q, p );
	}
	
	public getStatsByDay( target: string ) {
		const q = 'SELECT ROUND( AVG(sd.value), 1 ) as avg, ROUND( MIN(sd.value), 1 ) as min, ROUND( MAX(sd.value), 1 ) as max\n' +
		          'FROM sensor_data sd\n' +
		          'WHERE sd.sensor_id = ?\n' +
		          '  AND TIME( sd.created_at ) BETWEEN \'07:30:00\' AND \'21:29:59\'';
		const p = [
			target
		];
		
		return this.addQuery( q, p );
	}
	
	public getStatsByNight( target: string ) {
		const q = 'SELECT ROUND( AVG(sd.value), 1 ) as avg, ROUND( MIN(sd.value), 1 ) as min, ROUND( MAX(sd.value), 1 ) as max\n' +
		          'FROM sensor_data sd\n' +
		          'WHERE sd.sensor_id = ?\n' +
		          '  AND (\n' +
		          '        TIME( sd.created_at ) BETWEEN \'00:00:00\' AND \'07:29:59\'\n' +
		          '        OR TIME( sd.created_at ) BETWEEN \'21:30:00\' AND \'23:59:29\'\n' +
		          '    )';
		const p = [
			target
		];
		
		return this.addQuery( q, p );
	}
	
	public getLatestValue( target: string ) {
		const q = 'SELECT sd.value\n' +
		          'FROM sensor_data sd\n' +
		          'WHERE sd.sensor_id = ?\n' +
		          'ORDER BY sd.created_at DESC\n' +
		          'LIMIT 1';
		const p = [
			target
		];
		
		return this.addQuery( q, p );
	}
}
