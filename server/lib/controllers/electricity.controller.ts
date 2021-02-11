/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	houseSensor.controller.ts
 * Date: 	30/01/2021
 * Time: 	18:29
 */

import { Request, Response } from 'express';

export class ElectricityController {
	public postData( req: Request, res: Response ) {
		console.log( new Date(), req.headers, req.body );
		
		res.json( req.body );
	}
}
