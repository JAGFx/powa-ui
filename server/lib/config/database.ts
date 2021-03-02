/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	database.ts
 * Date: 	20/02/2021
 * Time: 	21:22
 */

import * as mysql                                       from 'mysql2/promise';
import { DB_HOST, DB_LOGIN, DB_NAME, DB_PORT, DB_PSWD } from './dotenv';

export class AQuery {
	private readonly _query: string;
	private readonly _params: any[];
	
	constructor( query: string, params: any[] ) {
		this._query  = query;
		this._params = params;
	}
	
	get query(): string {
		return this._query;
	}
	
	get params(): any[] {
		return this._params;
	}
}

export class Database {
	protected _pool: AQuery[] = [];
	
	// --
	
	protected async createConnexion() {
		// TODO Use env file
		return mysql.createConnection( {
			host:     DB_HOST,
			port:     DB_PORT,
			user:     DB_LOGIN,
			password: DB_PSWD,
			database: DB_NAME
		} );
	}
	
	protected addQuery( query: string, params: any[] = [] ): this {
		this._pool.push( new AQuery( query, params ) );
		return this;
	}
	
	public async flush() {
		const connection   = await this.createConnexion();
		let results: any[] = [];
		
		for ( let currentQuery of this._pool ) {
			const [ rows ] = await connection.execute( currentQuery.query, currentQuery.params );
			
			// @ts-ignore
			if ( rows.length === 0 )
				throw new Error( 'No rows affected' );
			
			results.push( rows );
		}
		
		connection.end();
		
		return ( results.length == 1 )
		       ? results[ 0 ]
		       : results;
	}
}
