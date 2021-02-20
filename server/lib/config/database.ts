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
		host:     'localhost',
		user:     'esm',
		password: 'esm',
		database: 'powa'
	} );
	
	// TODO: Add request promise, error handler and result return
}
