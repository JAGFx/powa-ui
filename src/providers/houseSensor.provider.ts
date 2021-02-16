/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	houseSensorProvider.ts
 * Date: 	30/01/2021
 * Time: 	18:26
 */
import Sensor       from '@/models/Sensors/Sensor';
import { Provider } from '@/providers/provider';
import axios        from 'axios';

export class HouseSensorProvider extends Provider {
	protected prefixPath(): string | null {
		return 'house-sensors/';
	}
	
	// ---
	public getSensorsList() {
		return axios.get( this.path( '' ) )
		            .then( ( data: any ) => {
			
			            const sensorsRaw                      = data.data;
			            let list: { [ key: string ]: Sensor } = {};
			
			            sensorsRaw.forEach( ( sensor: any ) => {
				            // list[ sensor.id ] = new Sensor( sensor.name, sensor.id );
			            } );
			
			            return list;
		            } );
	}
	
	public getSensorData( id: string, unit: string ) {
		return axios.get( this.path( `${ id }?unit=${ unit }` ) )
		            .then( ( data: any ) => {
			
			            return data.data;
		            } );
	}
	
	public getDayHistories( unit: string ) {
		return axios.get( this.path( `histories?unit=${ unit }` ) )
		            .then( ( data: any ) => {
			
			            return data.data;
		            } );
	}
}
