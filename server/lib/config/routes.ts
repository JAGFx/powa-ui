/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	routes.ts
 * Date: 	30/01/2021
 * Time: 	14:58
 */

// import { NodesController } from "../controllers/nodes.controller";
import { ApiController }         from '../controllers/api.controller';
import { ElectricityController } from '../controllers/electricity.controller';
import { HouseSensorController } from '../controllers/houseSensor.controller';

export class Routes {
	// public nodesController: NodesController = new NodesController();
	public apiCtrl: ApiController         = new ApiController();
	public hspCtrl: HouseSensorController = new HouseSensorController();
	public elCtrl: ElectricityController  = new ElectricityController();
	
	public routes( app: any ): void {
		// app.route( "/" ).get( this.nodesController.index );
		
		// --- API
		app.route( '/api/ping' ).get( this.apiCtrl.ping );
		
		// --- HouseSensor
		app.route( '/api/house-sensors' ).get( this.hspCtrl.getList );
		app.route( '/api/house-sensors/histories' ).get( this.hspCtrl.getDayHistories );
		app.route( '/api/house-sensors/:target' ).get( this.hspCtrl.getData );
		app.route( '/api/house-sensors/:target' ).post( this.hspCtrl.postData );
		
		// --- Electricity
		app.route( '/api/electricity/:target' ).post( this.elCtrl.postData );
		// app.route( "/nodes" ).get( this.nodesController.index );
	}
}
