import { Response }                     from 'express';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';

/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	Controller.ts
 * Date: 	22/02/2021
 * Time: 	13:36
 */

export class Controller {
	static response( res: Response, data: any, code: number = StatusCodes.OK ) {
		res.status( code )
		   .json( {
			   code:    code,
			   message: getReasonPhrase( code ),
			   data:    data
		   } )
		   .end();
	}
}
