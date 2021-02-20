/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	sensorController.ts
 * Date: 	30/01/2021
 * Time: 	18:29
 */

import { Request, Response } from 'express';

export class SensorController {
	private static readonly SENSORS = [
		{
			id:   'elc-001',
			name: 'Compteur',
			unit: 'unit-wh'
		},
		{
			id:   'tmp-001',
			name: 'Salon',
			unit: 'unit-temp'
		},
		{
			id:   'tmp-002',
			name: 'Chambre',
			unit: 'unit-temp'
		},
		{
			id:   'lux-001',
			name: 'Salon',
			unit: 'unit-lux'
		},
		{
			id:   'lux-002',
			name: 'Chambre',
			unit: 'unit-lux'
		}
	];
	
	// --
	
	public getList( req: Request, res: Response ) {
		const data = ( req.query.unit == 'undefined' )
		             ? SensorController.SENSORS
		             : SensorController.SENSORS.filter( s => s.unit === req.query.unit );
		
		res.json( data );
	}
	
	public getData( req: Request, res: Response ) {
		const rand = ( min: number, max: number ) => {
			return Math.random() * ( max - min ) + min;
		};
		const s    = SensorController.SENSORS.filter( s => s.id === req.params.target );
		
		res.json( Object.assign( {}, s[ 0 ], {
			month:   {
				min: rand( 0, 100 ),
				max: rand( 0, 100 ),
				avg: rand( 0, 100 )
			},
			day:     {
				min: rand( 0, 100 ),
				max: rand( 0, 100 ),
				avg: rand( 0, 100 )
			},
			night:   {
				min: rand( 0, 100 ),
				max: rand( 0, 100 ),
				avg: rand( 0, 100 )
			},
			current: rand( 0, 100 )
		} ) );
	}
	
	public getSensorHistories( req: Request, res: Response ) {
		// req.query.unit
		console.log( req.params.target );
		
		const rand = ( min: number, max: number ) => {
			return Math.random() * ( max - min ) + min;
		};
		
		const d = [
			{
				name: 'Feb. ' + req.params.target,
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
	
	public postData( req: Request, res: Response ) {
		console.log( req.body );
		
		res.json( req.body );
	}
	
	public patchData( req: Request, res: Response ) {
		console.log( req.params.target, req.body );
		
		res.json( req.body );
	}
	
	public delete( req: Request, res: Response ) {
		console.log( req.params.target, req.body );
		
		res.status( 204 )
		   .end();
		// res.json( {} );
	}
}
