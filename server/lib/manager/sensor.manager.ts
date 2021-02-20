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
		this._connexion.connect();
		
		this._connexion
		    .query(
			    `INSERT INTO sensor (id, name, unit) VALUES ('${ sensor.id }', '${ sensor.name }', '${ sensor.unit }');`,
			    ( err, rows, fields ) => {
				    if ( err )
					    throw err;
				
				    console.log( err, rows, fields );
			    } );
		
		this._connexion.end();
	}
}
