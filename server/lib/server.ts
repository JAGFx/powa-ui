/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	server.ts
 * Date: 	30/01/2021
 * Time: 	15:01
 */

import app from './app';

const PORT = process.env.PORT || 3000;

app.listen( PORT, () => console.log( `Listening on port ${ PORT }!` ) );
