/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	currentSensor.provider.ts
 * Date: 	15/02/2021
 * Time: 	20:38
 */
import Sensor       from '@/models/Sensors/Sensor';
import SensorRange  from '@/models/Sensors/SensorRange';
import { Provider } from '@/providers/provider';
import axios        from 'axios';

export class SensorProvider extends Provider {
	protected prefixPath(): string | null {
		return 'sensors/';
	}
	
	// --
	
	public getSensorsList( unit?: string ) {
		return axios.get( this.path( `?unit=${ unit }` ) )
		            .then( ( data: any ) => {
			
			            const sensorsRaw                      = data.data;
			            let list: { [ key: string ]: Sensor } = {};
			
			            sensorsRaw.forEach( ( sensor: any ) => {
				            list[ sensor.id ] = new Sensor( sensor.name, sensor.id, sensor.unit );
			            } );
			
			            return list;
		            } );
	}
	
	public getSensorData( id: string ) {
		return axios.get( this.path( `${ id }` ) )
		            .then( ( data: any ) => {
			            const raw = data.data;
			
			            let sensor        = new Sensor( raw.name, raw.id, raw.unit );
			            sensor.monthRange = new SensorRange(
				            raw.month.min,
				            raw.month.max,
				            raw.month.avg );
			            sensor.dayRange   = new SensorRange(
				            raw.day.min,
				            raw.day.max,
				            raw.day.avg );
			            sensor.nightRange = new SensorRange(
				            raw.night.min,
				            raw.night.max,
				            raw.night.avg );
			            sensor.current    = raw.current;
			
			            return sensor;
		            } );
	}
}
