/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	sensorController.ts
 * Date: 	30/01/2021
 * Time: 	18:29
 */

import { Request, Response } from 'express';

export class ElectricityController {
	public postData( req: Request, res: Response ) {
		console.log( new Date(), req.body );
		
		res.json( req.body );
	}
}
