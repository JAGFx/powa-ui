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
	
	private _name: string;
	private _uid: number  = -1;
	private _id: string;
	private _unit: string = Sensor.UNIT_WATT_HOUR;
	private _monthRange?: SensorRange | undefined;
	private _dayRange?: SensorRange | undefined;
	private _nightRange?: SensorRange | undefined;
	private _current?: number | undefined;
	
	public constructor( name: string, id: string, unit: string, uid: number ) {
		this._name       = name;
		this._id         = id;
		this._unit       = unit;
		this._uid        = uid;
		this._monthRange = new SensorRange( 0, 0, 0 );
		this._dayRange   = new SensorRange( 0, 0, 0 );
		this._nightRange = new SensorRange( 0, 0, 0 );
		this._current    = 0;
	}
	
	// ---
	
	get id(): string {
		return this._id;
	}
	
	set id( value: string ) {
		this._id = value;
	}
	
	get uid(): number {
		return this._uid;
	}
	
	set uid( value: number ) {
		this._uid = value;
	}
	
	get name(): string {
		return this._name;
	}
	
	set name( value: string ) {
		this._name = value;
	}
	
	get unit(): string {
		return this._unit;
	}
	
	set unit( value: string ) {
		this._unit = value;
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
	
	// --
	
	public isElectricity(): boolean {
		return this.unit === Sensor.UNIT_WATT_HOUR;
	}
	
	public isTemperature(): boolean {
		return this.unit === Sensor.UNIT_TEMPERATURE;
	}
	
	public isLight(): boolean {
		return this.unit === Sensor.UNIT_LUMINOSITY;
	}
}
