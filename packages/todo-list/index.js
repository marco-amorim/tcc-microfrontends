import Vue from 'vue';
import App from './App.vue';
import singleSpaVue from 'single-spa-vue';

const vueLifeCycles = singleSpaVue({
	Vue,
	appOptions: {
		render: (h) => h(App),
	},
});

export const bootstrap = vueLifeCycles.bootstrap;
export const mount = vueLifeCycles.mount;
export const unmount = vueLifeCycles.unmount;
