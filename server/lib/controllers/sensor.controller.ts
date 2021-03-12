/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	sensorController.ts
 * Date: 	30/01/2021
 * Time: 	18:29
 */

import { Request, Response }     from 'express';
import { StatusCodes }           from 'http-status-codes';
import * as moment               from 'moment';
import { SensorDataManager }     from '../managers/sensor-data.manager';
import { SensorManager }         from '../managers/sensor.manager';
import Sensor                    from '../models/Sensor';
import { Controller, Exception } from './Controller';

export class SensorController {
	// -- CRUD
	
	public getList( req: Request, res: Response ) {
		const sensorMgr = new SensorManager();
		sensorMgr
			.findAllByUnit( <string>req.query.unit )
			.then( ( result: any ) => Controller.response( res, result ) )
			.catch( ( reason => {
				console.error( reason );
				Controller.response( res, reason, StatusCodes.NO_CONTENT );
			} ) );
	}
	
	public getOne( req: Request, res: Response ) {
		const sensorMgr = new SensorManager();
		sensorMgr
			.findOnById( req.params.target )
			.then( ( result: any ) => Controller.response( res, result[ 0 ] ) )
			.catch( ( reason => Controller.response( res, reason, StatusCodes.NOT_FOUND ) ) );
	}
	
	public postSensor( req: Request, res: Response ) {
		const sensorMgr = new SensorManager();
		const b         = req.body;
		sensorMgr
			.create( new Sensor( b._name, b._id, b._unit ) )
			.then( ( result: any ) => Controller.response( res, result[ 0 ] ) )
			.catch( ( reason => Controller.response( res, reason, StatusCodes.INTERNAL_SERVER_ERROR ) ) );
	}
	
	public patchSensor( req: Request, res: Response ) {
		const sensorMgr = new SensorManager();
		const b         = req.body;
		sensorMgr
			.update( new Sensor( b._name, b._id, b._unit ) )
			.then( ( result: any ) => Controller.response( res, result[ 0 ] ) )
			.catch( ( reason => Controller.response( res, reason, StatusCodes.NOT_FOUND ) ) );
	}
	
	public delete( req: Request, res: Response ) {
		const sensorMgr = new SensorManager();
		sensorMgr
			.remove( req.params.target )
			.then( ( result: any ) => Controller.response( res, {}, StatusCodes.NO_CONTENT ) )
			.catch( ( reason => Controller.response( res, reason, StatusCodes.NOT_FOUND ) ) );
	}
	
	// --
	
	public getData( req: Request, res: Response ) {
		const sMgr     = new SensorManager();
		const sDataMgr = new SensorDataManager();
		
		const target = req.params.target;
		
		try {
			sMgr.findOnById( target )
			    .then( ( resultSensor: any ) => {
				    const sensor = resultSensor[ 0 ];
				
				    sDataMgr.getStatsByMonth( sensor._id )
				            .getStatsByDay( sensor._id )
				            .getStatsByNight( sensor._id )
				            .getLatestValue( sensor._id )
				            .flush()
				            .then( ( resultStats: any ) => {
					            if ( resultStats.length < 4 )
						            throw new Exception(
							            'Unable to retrieve all statistic data',
							            '',
							            StatusCodes.BAD_REQUEST );
					
					            const month   = resultStats[ 0 ][ 0 ];
					            const day     = resultStats[ 1 ][ 0 ];
					            const night   = resultStats[ 2 ][ 0 ];
					            const current = resultStats[ 3 ][ 0 ];
					
					            const s = Object.assign( {}, sensor, {
						            month:   {
							            min: month.min,
							            max: month.max,
							            avg: month.avg
						            },
						            day:     {
							            min: day.min,
							            max: day.max,
							            avg: day.avg
						            },
						            night:   {
							            min: night.min,
							            max: night.max,
							            avg: night.avg
						            },
						            current: current.value
					            } );
					
					            Controller.response( res, s, StatusCodes.OK );
				            } );
			    } )
			    .catch( reason => { throw new Exception( reason, '', StatusCodes.NOT_FOUND ); } );
			
		} catch ( e ) {
			if ( e instanceof Exception )
				Controller.response( res, e.message, e.code );
			else
				Controller.response( res, e.message, StatusCodes.INTERNAL_SERVER_ERROR );
		}
	}
	
	public getSensorHistories( req: Request, res: Response ) {
		const sDataMgr = new SensorDataManager();
		
		sDataMgr.getStatsOfThisDay( req.params.target )
		        .then( ( result ) => {
			        let d = [
				        {
					        name: moment().format( 'll' ),
					        data: []
				        }
			        ];
			
			        for ( let row of result )
				        d[ 0 ].data.push( [ row.hour, row.value ] );
			
			        // console.log( d );
			
			        Controller.response( res, d, StatusCodes.OK );
		        } )
		        .catch( reason => Controller.response( res, reason, StatusCodes.NO_CONTENT ) );
		
	}
	
	public postData( req: Request, res: Response ) {
		const lines = req.body.split( '\n' );
		
		new Promise( ( ( resolve, reject ) => {
			const srDataMgr = new SensorDataManager();
			lines.forEach( val => {
				const split = val.split( ';' );
				
				if ( split.length < 2 )
					reject( 'Unable to parse body' );
				
				const sensorName      = split[ 0 ];
				const sensorDateValue = split[ 1 ];
				const currentDate     = moment().format( 'YYYY-MM-DD HH:mm:ss.SSS' );
				
				srDataMgr.create( sensorName, sensorDateValue, currentDate );
			} );
			
			srDataMgr
				.flush()
				.then( ( result: any ) => resolve( result ) )
				.catch( reason => reject( reason ) );
		} ) )
			.then( ( result: any ) => Controller.response( res, req.body, StatusCodes.OK ) )
			.catch( ( reason => Controller.response( res, reason, StatusCodes.BAD_REQUEST ) ) );
	}
}
