import { Request, Response } from 'express';

/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	api.controller.ts
 * Date: 	30/01/2021
 * Time: 	15:23
 */

export class ApiController {
	public ping( req: Request, res: Response ) {
		res.json( {
			          message: 'pong'
		          } );
	}
}
