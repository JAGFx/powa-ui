/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	provider.ts
 * Date: 	30/01/2021
 * Time: 	18:14
 */

export abstract class Provider {
	protected protocol: string = window.location.protocol;
	protected host: string     = window.location.hostname;
	protected port: number     = process.env.VUE_APP_SERVEUR_PORT;
	
	// ---
	
	protected path( target?: string ): string {
		const hostname = ( this.port !== undefined )
		                 ? `${ this.protocol }//${ this.host }:${ this.port }`
		                 : window.location.origin;
		
		return `${ hostname }/api/${ this.prefixPath() }${ target }`;
	}
	
	// ---
	protected abstract prefixPath(): string | null;
}
