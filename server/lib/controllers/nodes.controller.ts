/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	nodes.controller.ts
 * Date: 	30/01/2021
 * Time: 	14:58
 */

import { Request, Response } from 'express';

export class NodesController {
	public index( req: Request, res: Response ) {
		res.json( {
			          message: 'Hello boi'
		          } );
	}
}
