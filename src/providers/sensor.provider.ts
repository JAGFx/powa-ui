/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	currentSensor.provider.ts
 * Date: 	15/02/2021
 * Time: 	20:38
 */
import Sensor       from '@/models/Sensors/Sensor';
import { Provider } from '@/providers/provider';
import axios        from 'axios';

export class SensorProvider extends Provider {
	protected prefixPath(): string | null {
		return 'sensors/';
	}
	
	// --
	
	public getSensorsList( unit?: string ) {
		
		const path = ( unit !== undefined )
		             ? `?unit=${ unit }`
		             : '';
		return axios.get( this.path( path ) )
		            .then( ( data: any ) => {
			            const sensorsRaw                      = data.data.data;
			            let list: { [ key: string ]: Sensor } = {};
			
			            sensorsRaw.forEach( ( sensor: any ) => {
				            list[ sensor.id ] = new Sensor( sensor._name, sensor._id, sensor._unit, sensor._uid );
			            } );
			
			            return list;
		            } );
	}
	
	public getSensorData( id: string ) {
		return axios.get( this.path( `${ id }` ) )
		            .then( ( data: any ) => {
			            const raw = data.data.data;
			
			            let sensor: Sensor = new Sensor( raw._name, raw._id, raw._unit, raw._uid );
			            // sensor.monthRange = new SensorRange(
			            //     raw.month.min,
			            //     raw.month.max,
			            //     raw.month.avg );
			            // sensor.dayRange   = new SensorRange(
			            //     raw.day.min,
			            //     raw.day.max,
			            //     raw.day.avg );
			            // sensor.nightRange = new SensorRange(
			            //     raw.night.min,
			            //     raw.night.max,
			            //     raw.night.avg );
			            // sensor.current    = raw.current;
			
			            return sensor;
		            } );
	}
	
	public getSensorHistories( id: string ) {
		return axios.get( this.path( `${ id }/histories` ) )
		            .then( ( data: any ) => {
			            const raw = data.data.data;
			            return raw;
		            } );
	}
	
	public postSensor( sensor: Sensor ) {
		return axios.post( this.path( `` ), sensor )
		            .then( ( data: any ) => {
			            console.log( data );
		            } );
	}
	
	public patchSensor( sensor: Sensor ) {
		// console.log( 'patch', sensor );
		return axios.patch( this.path( `${ sensor.id }` ), sensor )
		            .then( ( data: any ) => {
			            console.log( data );
		            } );
	}
	
	public deleteSensor( sensorID: string ) {
		return axios.delete( this.path( `${ sensorID }` ) )
		            .then( ( data: any ) => {
			            console.log( data );
		            } );
	}
}
