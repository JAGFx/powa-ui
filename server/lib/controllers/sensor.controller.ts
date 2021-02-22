/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	sensorController.ts
 * Date: 	30/01/2021
 * Time: 	18:29
 */

import { Request, Response } from 'express';
import { StatusCodes }       from 'http-status-codes';
import { SensorManager }     from '../manager/sensor.manager';
import { Controller }        from './Controller';

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
	
	// -- CRUD
	
	public getList( req: Request, res: Response ) {
		const sensorMgr = new SensorManager();
		sensorMgr.findAllByUnit( <string>req.query.unit )
		         .then( ( result: any ) => {
			         console.log( result.rows );
			         Controller.response( res, result.rows );
		         } );
	}
	
	public postSensor( req: Request, res: Response ) {
		// console.log( req.body );
		
		const sensorMgr = new SensorManager();
		sensorMgr.create( req.body )
		         .then( ( result: any ) => {
			         console.log( result.rows );
			         Controller.response( res, req.body );
		         } );
	}
	
	public patchData( req: Request, res: Response ) {
		// console.log( req.params.target, req.body );
		
		// TODO Pre-check if it's found
		
		const sensorMgr = new SensorManager();
		sensorMgr.update( req.body )
		         .then( ( result: any ) => {
			         console.log( result.rows );
			         Controller.response( res, req.body );
		         } );
	}
	
	public delete( req: Request, res: Response ) {
		// console.log( req.params.target, req.body );
		
		// TODO Pre-check if it's found
		
		const sensorMgr = new SensorManager();
		sensorMgr.remove( req.params.target )
		         .then( ( result: any ) => {
			         console.log( result.rows );
			         Controller.response( res, {}, StatusCodes.NO_CONTENT );
		         } );
	}
	
	// --
	
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
}
