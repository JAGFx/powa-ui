/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	dotenv.ts
 * Date: 	02/03/2021
 * Time: 	21:32
 */

import * as dotenv from 'dotenv';

let path;
switch ( process.env.NODE_ENV ) {
	case 'test':
		path = `${ __dirname }/../../.env.test`;
		break;
	case 'production':
		path = `${ __dirname }/../../.env`;
		break;
	default:
		path = `${ __dirname }/../../.env.local`;
}
dotenv.config( { path: path } );

export const DB_HOST: string  = process.env.DB_HOST;
export const DB_PORT: number  = Number( process.env.DB_PORT );
export const DB_LOGIN: string = process.env.DB_LOGIN;
export const DB_PSWD: string  = process.env.DB_PSWD;
export const DB_NAME: string  = process.env.DB_NAME;