/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	app.ts
 * Date: 	30/01/2021
 * Time: 	14:58
 */

import * as bodyParser from 'body-parser';
import * as cors       from 'cors';
import * as express    from 'express';
import { Routes }      from './config/routes';

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
		this.app.use( cors( { origin: true, credentials: true } ) );
		this.app.use( bodyParser.json() );
		this.app.use( bodyParser.urlencoded( { extended: false } ) );
	}
}

export default new App().app;
