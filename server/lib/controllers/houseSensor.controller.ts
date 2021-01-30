/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	houseSensor.controller.ts
 * Date: 	30/01/2021
 * Time: 	18:29
 */

import { Request, Response } from 'express';

export class HouseSensorController {
	public getData( req: Request, res: Response ) {
		res.json( {
			          target:  req.params.target,
			          unit:    req.query.unit,
			          month:   {
				          min: -5.8,
				          max: 33.6,
				          avg: 20.3
			          },
			          day:     {
				          min: -10.5,
				          max: 25.6,
				          avg: 22.1
			          },
			          night:   {
				          min: 0.6,
				          max: 39.5,
				          avg: 24.6
			          },
			          current: 20.0
		          } );
	}
}
