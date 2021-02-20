/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	BoxSensor.ts
 * Date: 	29/01/2021
 * Time: 	20:03
 */


export default class Sensor {
	public static readonly UNIT_TEMPERATURE: string = 'unit-temp';
	public static readonly UNIT_LUMINOSITY: string  = 'unit-lux';
	public static readonly UNIT_WATT_HOUR: string   = 'unit-wh';
	
	private _name: string;
	private _uid: number  = -1;
	private _id: string;
	private _unit: string = Sensor.UNIT_WATT_HOUR;
	
	public constructor( name: string, id: string, unit: string ) {
		this._name = name;
		this._id   = id;
		this._unit = unit;
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
}
