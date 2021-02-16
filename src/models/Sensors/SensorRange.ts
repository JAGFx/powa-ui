/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	BoxSensorData.ts
 * Date: 	30/01/2021
 * Time: 	11:48
 */


export default class SensorRange {
	private _min?: number;
	private _max?: number;
	private _avg?: number;
	
	// ---
	
	constructor(
		min: number,
		max: number,
		avg: number ) {
		this._min = min;
		this._max = max;
		this._avg = avg;
	}
	
	// ---
	
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
}
