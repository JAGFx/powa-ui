// import Home from '../views/Home.vue'
import Default                    from '@/views/Default.vue';
import Electricity                from '@/views/Electricity.vue';
import Light                      from '@/views/Light.vue';
import SensorEdit                 from '@/views/Sensor/SensorEdit.vue';
import SensorNew                  from '@/views/Sensor/SensorNew.vue';
import Settings                   from '@/views/Settings.vue';
import Temperature                from '@/views/Temperature.vue';
import Vue                        from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use( VueRouter );

const routes: Array<RouteConfig> = [
	{ path: '/', component: Default },
	{ path: '/electicity', component: Electricity },
	{ path: '/light', component: Light },
	{ path: '/temperature', component: Temperature },
	{ path: '/settings', component: Settings },
	{ path: '/sensors/new', component: SensorNew },
	{ path: '/sensors/:sensor_id/edit', component: SensorEdit, props: true }
];

const router = new VueRouter(
	{
		mode: 'history',
		base: process.env.BASE_URL,
		routes
	} );

export default router;
