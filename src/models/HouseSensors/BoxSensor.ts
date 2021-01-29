/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	BoxSensor.ts
 * Date: 	29/01/2021
 * Time: 	20:03
 */

export default class BoxSensor {
	private _name: string;
	private _id: string;
	
	constructor( name: string, id: string ) {
		this._name = name;
		this._id   = id;
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
}
