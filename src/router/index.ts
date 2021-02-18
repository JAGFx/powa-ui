// import Home from '../views/Home.vue'
import Default                    from '@/views/Default.vue';
import Electricity                from '@/views/Electricity.vue';
import Light                      from '@/views/Light.vue';
import Settings                   from '@/views/Settings.vue';
import Temperature                from '@/views/Temperature.vue';
import Vue                        from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use( VueRouter );

const routes: Array<RouteConfig> = [
	{
		path:      '/',
		name:      'Default',
		component: Default
	},
	{
		path:      '/electicity',
		name:      'Electricity',
		component: Electricity
	},
	{
		path:      '/light',
		name:      'Light',
		component: Light
	},
	{
		path:      '/temperature',
		name:      'Temperature',
		component: Temperature
	},
	{
		path:      '/settings',
		name:      'Settings',
		component: Settings
	}
];

const router = new VueRouter(
	{
		mode: 'history',
		base: process.env.BASE_URL,
		routes
	} );

export default router;
