/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	provider.ts
 * Date: 	30/01/2021
 * Time: 	18:14
 */

export abstract class Provider {
	protected host: string = `http://${ process.env.VUE_APP_HOST }`;
	protected port: number = process.env.VUE_APP_PORT;
	
	// ---
	
	protected path( target?: string ): string {
		return `${ this.host }:${ this.port }/api/${ this.prefixPath() }${ target }`;
	}
	
	// ---
	protected abstract prefixPath(): string | null;
}
