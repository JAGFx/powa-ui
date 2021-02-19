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
	
	// public elCtrl: ElectricityController = new ElectricityController();
	
	public routes( app: any ): void {
		// --- API
		app.route( '/api/ping' ).get( this.apiCtrl.ping );
		
		// --- HouseSensor
		app.route( '/api/sensors' ).get( this.sensCtrl.getList );
		app.route( '/api/sensors/histories' ).get( this.sensCtrl.getDayHistories );
		app.route( '/api/sensors/:target' ).get( this.sensCtrl.getData );
		app.route( '/api/sensors' ).post( this.sensCtrl.postData );
		app.route( '/api/sensors/:target' ).patch( this.sensCtrl.patchData );
		app.route( '/api/sensors/:target' ).delete( this.sensCtrl.delete );
		
		// --- Electricity
		// app.route( '/api/electricity/:target' ).post( this.elCtrl.postData );
	}
}
