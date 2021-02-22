/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	database.ts
 * Date: 	20/02/2021
 * Time: 	21:22
 */

import * as mysql     from 'mysql';
import { Connection } from 'mysql';

export class Database {
	// TODO Use env file
	protected _connexion: Connection = mysql.createConnection( {
		host: 'localhost',
		user: 'esm',
		password: 'esm',
		database: 'powa'
	} );
	
	protected query( query: string, params: any[] = [] ) {
		return new Promise( ( resolve, reject ) => {
			this._connexion.connect();
			
			this._connexion
			    .query(
				    query, params,
				    ( err, rows, fields ) => {
					    if ( err ) return reject( err );
					    if ( rows.affectedRows === 0 ) return reject( 'No rows affected' );
					
					    resolve( { rows, fields } );
					    // console.log( err, rows, fields );
				    } );
			
			this._connexion.end();
		} );
	}
}
