/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	server.ts
 * Date: 	30/01/2021
 * Time: 	15:01
 */

import app               from './app';
import { SensorManager } from './manager/sensor.manager';
import Sensor            from './models/Sensor';

const PORT = process.env.PORT || 3000;

app.listen( PORT, () => console.log( `Listening on port ${ PORT }!` ) );

// -- TEST
const sm = new SensorManager();
const s  = new Sensor( 'Salon', 'lux-001', Sensor.UNIT_LUMINOSITY );
sm.create( s );
// -- ./TEST
