/**
 * @author:	Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:	powa
 * file: 	houseSensorProvider.ts
 * Date: 	30/01/2021
 * Time: 	18:26
 */
import { Provider } from '@/providers/provider';

export class HouseSensorProvider extends Provider {
	protected prefixPath(): string | null {
		return 'house-sensors/';
	}
}
