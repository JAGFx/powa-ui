/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	BoxSensor.ts
 * Date: 	29/01/2021
 * Time: 	20:03
 */

import SensorRange from '@/models/Sensors/SensorRange';

export default class Sensor {
	public static readonly UNIT_TEMPERATURE: string = 'unit-temp';
	public static readonly UNIT_LUMINOSITY: string  = 'unit-lux';
	public static readonly UNIT_WATT_HOUR: string   = 'unit-wh';
	
	protected _name: string;
	protected _id: string;
	protected _unit: string;
	protected _monthRange?: SensorRange | undefined;
	protected _dayRange?: SensorRange | undefined;
	protected _nightRange?: SensorRange | undefined;
	protected _current?: number | undefined;
	
	public constructor( name: string, id: string, unit: string ) {
		this._name       = name;
		this._id         = id;
		this._unit       = unit;
		this._monthRange = new SensorRange(
			0,
			0,
			0
		);
		this._dayRange   = new SensorRange(
			0,
			0,
			0
		);
		this._nightRange = new SensorRange(
			0,
			0,
			0
		);
		this._current    = 0;
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
	
	get monthRange(): SensorRange | undefined {
		return this._monthRange;
	}
	
	set monthRange( value: SensorRange | undefined ) {
		this._monthRange = value;
	}
	
	get dayRange(): SensorRange | undefined {
		return this._dayRange;
	}
	
	set dayRange( value: SensorRange | undefined ) {
		this._dayRange = value;
	}
	
	get nightRange(): SensorRange | undefined {
		return this._nightRange;
	}
	
	set nightRange( value: SensorRange | undefined ) {
		this._nightRange = value;
	}
	
	get current(): number | undefined {
		return this._current;
	}
	
	set current( value: number | undefined ) {
		this._current = value;
	}
	
	// --
	
	public unitHumanized(): string {
		if ( this._unit === Sensor.UNIT_TEMPERATURE )
			return '°C';
		
		else if ( this._unit === Sensor.UNIT_LUMINOSITY )
			return 'lux';
		
		else if ( this._unit === Sensor.UNIT_WATT_HOUR )
			return 'wh';
		
		else return '';
	}
}
