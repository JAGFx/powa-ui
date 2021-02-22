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
		const q = 'INSERT INTO sensor (id, name, unit) VALUES (?, ?, ?)';
		const p = [
			sensor.id,
			sensor.name,
			sensor.unit
		];
		
		return this.query( q, p );
	}
	
	public update( sensor: Sensor ) {
		const q = 'UPDATE sensor SET name = ?, unit = ? WHERE id = ?';
		const p = [
			sensor.name,
			sensor.unit,
			sensor.id
		];
		
		return this.query( q, p );
	}
	
	public remove( sensorID: string ) {
		const q = 'DELETE FROM sensor WHERE id = ?';
		const p = [
			sensorID
		];
		
		return this.query( q, p );
	}
	
	// ---
	
	public findOnById( id: string ) {
		const q = 'SELECT * FROM sensor WHERE id = ?';
		const p = [ id ];
		
		return this.query( q, p );
	}
	
	public findAll() {
		const q = 'SELECT * FROM sensor ORDER BY name';
		
		return this.query( q );
	}
	
	public findAllByUnit( unit: string ) {
		const q = ( unit !== undefined )
		          ? 'SELECT * FROM sensor WHERE unit = ? ORDER BY name'
		          : 'SELECT * FROM sensor ORDER BY name';
		const p = [ unit ];
		
		return this.query( q, p );
	}
}
