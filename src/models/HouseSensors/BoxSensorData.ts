/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	BoxSensorData.ts
 * Date: 	30/01/2021
 * Time: 	11:48
 */


export default class BoxSensorData {
	private _title?: string;
	private _unit: string;
	private _min?: number;
	private _max?: number;
	private _avg?: number;
	private _current?: number | undefined;
	
	// ---
	
	constructor( title: string, unit: string, min: number, max: number, avg: number, current: number | undefined = undefined ) {
		this._title   = title;
		this._unit    = unit;
		this._min     = min;
		this._max     = max;
		this._avg     = avg;
		this._current = current;
	}

// ---
	
	get title(): string | undefined {
		return this._title;
	}
	
	set title( value: string | undefined ) {
		this._title = value;
	}
	
	get min(): number | undefined {
		return this._min;
	}
	
	set min( value: number | undefined ) {
		this._min = value;
	}
	
	get max(): number | undefined {
		return this._max;
	}
	
	set max( value: number | undefined ) {
		this._max = value;
	}
	
	get avg(): number | undefined {
		return this._avg;
	}
	
	set avg( value: number | undefined ) {
		this._avg = value;
	}
	
	get current(): number | undefined {
		return this._current;
	}
	
	set current( value: number | undefined ) {
		this._current = value;
	}
	
	get unit(): string {
		return this._unit;
	}
	
	set unit( value: string ) {
		this._unit = value;
	}
}