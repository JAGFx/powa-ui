import Vue from 'vue';

import VueApexCharts from 'vue-apexcharts';
import App           from './App.vue';
import './registerServiceWorker';
import router        from './router';

Vue.use( VueApexCharts );

Vue.component( 'apexchart', VueApexCharts );

Vue.config.productionTip = false;

new Vue( {
	         router,
	         render: h => h( App )
         } )
	.$mount( '#app' );
