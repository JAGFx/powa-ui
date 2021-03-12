/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	sensor.manager.ts
 * Date: 	20/02/2021
 * Time: 	21:28
 */
import { Database } from '../config/database';
import Sensor       from '../models/Sensor';

export class SensorManager extends Database {
	public create( sensor: Sensor ) {
		const q = 'INSERT INTO sensor (_id, _name, _unit) VALUES (?, ?, ?)';
		const p = [
			sensor.id,
			sensor.name,
			sensor.unit
		];
		
		return this.addQuery( q, p )
		           .flush();
	}
	
	public update( sensor: Sensor ) {
		const q = 'UPDATE sensor SET _name = ?, _unit = ? WHERE _id = ?';
		const p = [
			sensor.name,
			sensor.unit,
			sensor.id
		];
		
		return this.addQuery( q, p )
		           .flush();
	}
	
	public remove( sensorID: string ) {
		const q = 'DELETE FROM sensor WHERE _id = ?';
		const p = [
			sensorID
		];
		
		return this.addQuery( q, p )
		           .flush();
	}
	
	// ---
	
	public findOnById( id: string ) {
		const q = 'SELECT * FROM sensor WHERE _id = ? LIMIT 1';
		const p = [ id ];
		
		return this.addQuery( q, p )
		           .flush();
	}
	
	public findAll() {
		const q = 'SELECT * FROM sensor ORDER BY _name';
		
		return this.addQuery( q );
	}
	
	public findAllByUnit( unit: string ) {
		const q = ( unit !== undefined )
		          ? 'SELECT * FROM sensor WHERE _unit = ? ORDER BY _name'
		          : 'SELECT * FROM sensor ORDER BY _name';
		const p = ( unit !== undefined )
		          ? [ unit ]
		          : [];
		
		return this.addQuery( q, p )
		           .flush();
	}
}
