/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	routes.ts
 * Date: 	30/01/2021
 * Time: 	14:58
 */

import { ApiController }    from '../controllers/api.controller';
import { SensorController } from '../controllers/sensor.controller';

export class Routes {
	public apiCtrl: ApiController     = new ApiController();
	public sensCtrl: SensorController = new SensorController();
	
	public routes( app: any ): void {
		// --- API
		app.route( '/api/ping' ).get( this.apiCtrl.ping );
		
		// --- Sensor
		app.route( '/api/sensors' ).get( this.sensCtrl.getList );
		app.route( '/api/sensors/:target' ).get( this.sensCtrl.getOne );
		app.route( '/api/sensors' ).post( this.sensCtrl.postSensor );
		app.route( '/api/sensors/:target' ).patch( this.sensCtrl.patchSensor );
		app.route( '/api/sensors/:target' ).delete( this.sensCtrl.delete );
		
		// --- Sensor stats
		app.route( '/api/sensors/:target/histories' ).get( this.sensCtrl.getSensorHistories );
		app.route( '/api/sensors/:target/stats' ).get( this.sensCtrl.getData );
		app.route( '/api/sensors/data' ).post( this.sensCtrl.postData );
	}
}
