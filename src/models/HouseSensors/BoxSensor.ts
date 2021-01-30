/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	BoxSensor.ts
 * Date: 	29/01/2021
 * Time: 	20:03
 */
import BoxSensorData from '@/models/HouseSensors/BoxSensorData';

export default class BoxSensor {
	protected _name: string;
	protected _id: string;
	protected _monthData?: BoxSensorData | undefined;
	protected _dayData?: BoxSensorData | undefined;
	protected _nightData?: BoxSensorData | undefined;
	protected _nowData?: BoxSensorData | undefined;
	
	constructor( name: string, id: string ) {
		this._name      = name;
		this._id        = id;
		this._monthData = new BoxSensorData(
			'---',
			'--',
			0,
			0,
			0
		);
		this._dayData   = new BoxSensorData(
			'---',
			'--',
			0,
			0,
			0
		);
		this._nightData = new BoxSensorData(
			'---',
			'--',
			0,
			0,
			0
		);
		this._nowData   = new BoxSensorData(
			'---',
			'--',
			0,
			0,
			0,
			0
		);
	}
	
	// ---
	
	get id(): string {
		return this._id;
	}
	
	set id( value: string ) {
		this._id = value;
	}
	
	get name(): string {
		return this._name;
	}
	
	set name( value: string ) {
		this._name = value;
	}
	
	get monthData(): BoxSensorData | undefined {
		return this._monthData;
	}
	
	set monthData( value: BoxSensorData | undefined ) {
		this._monthData = value;
	}
	
	get dayData(): BoxSensorData | undefined {
		return this._dayData;
	}
	
	set dayData( value: BoxSensorData | undefined ) {
		this._dayData = value;
	}
	
	get nightData(): BoxSensorData | undefined {
		return this._nightData;
	}
	
	set nightData( value: BoxSensorData | undefined ) {
		this._nightData = value;
	}
	
	get nowData(): BoxSensorData | undefined {
		return this._nowData;
	}
	
	set nowData( value: BoxSensorData | undefined ) {
		this._nowData = value;
	}
}
