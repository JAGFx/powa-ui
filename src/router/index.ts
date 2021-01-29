import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'
import Default from '@/components/Default.vue';
import HouseSensor from '@/components/HouseSensor.vue';

Vue.use( VueRouter )

const routes: Array<RouteConfig> = [
	{
		path:      '/',
		name:      'Default',
		component: Default
	},
	{
		path:      '/house-sensor',
		name:      'HouseSensor',
		component: HouseSensor
	}
]

const router = new VueRouter( {
	mode: 'history',
	base: process.env.BASE_URL,
	routes
} )

export default router
