import { Request, Response } from 'express';
import { Controller }        from './Controller';

/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	api.controller.ts
 * Date: 	30/01/2021
 * Time: 	15:23
 */

export class ApiController {
	public ping( req: Request, res: Response ) {
		Controller.response( res, { message: 'pong' } );
	}
}
