/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	houseSensor.controller.ts
 * Date: 	30/01/2021
 * Time: 	18:29
 */

import { Request, Response } from 'express';

export class HouseSensorController {
	public getList( req: Request, res: Response ) {
		res.json( [
			          {
				          id:   '454f-ddsz',
				          name: 'The god'
			          },
			          {
				          id:   '012ad-dd5s',
				          name: 'The sensor'
			          },
			          {
				          id:   'd5s-012ad',
				          name: '2 sensor'
			          }
		          ] );
	}
	
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
	
	public getDayHistories( req: Request, res: Response ) {
		// req.query.unit
		
		const rand = ( min: number, max: number ) => {
			return Math.random() * ( max - min ) + min;
		};
		const d    = [
			{
				name: 'Feb. ' + req.query.unit,
				data: [
					[ 1486684800000, rand( 0, 100 ) ],
					[ 1486771200000, rand( 0, 100 ) ],
					[ 1486857600000, rand( 0, 100 ) ],
					[ 1486944000000, rand( 0, 100 ) ],
					[ 1487030400000, rand( 0, 100 ) ],
					[ 1487116800000, rand( 0, 100 ) ]
				]
			}
		];
		
		res.json( d );
	}
}
