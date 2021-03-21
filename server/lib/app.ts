/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	app.ts
 * Date: 	30/01/2021
 * Time: 	14:58
 */

import * as bodyParser                                  from 'body-parser';
import * as cors                                        from 'cors';
import * as express                                     from 'express';
import * as basicAuth                                   from 'express-basic-auth';
import * as path                                        from 'path';
import { APP_PSWD, APP_USERNAME, CORS_HOSTS, IS_PRODD } from './config/dotenv';
import { Routes }                                       from './config/routes';

// http://rsseau.fr/programming/2019/06/19/express-typescript.html

class App {
	public app: express.Application;
	public routePrv: Routes = new Routes();
	
	constructor() {
		this.app = express();
		this.config();
		this.routePrv.routes( this.app );
	}
	
	private config(): void {
		let auth             = {};
		auth[ APP_USERNAME ] = APP_PSWD;
		
		this.app.use( cors( { origin: CORS_HOSTS, credentials: true } ) );
		this.app.use( bodyParser.json() );
		this.app.use( bodyParser.text() );
		this.app.use( bodyParser.urlencoded( { extended: false } ) );
		
		if ( IS_PRODD() ) {
			this.app.use( basicAuth( {
				challenge: true,
				users:     auth
			} ) );
		}
		
		const pathDist = path.resolve( __dirname, '../../dist' );
		this.app.use( express.static( pathDist ) );
	}
}

export default new App().app;
