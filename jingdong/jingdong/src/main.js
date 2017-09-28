// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import css from "./css/style.css"
import fonts from "./fonts/iconfont.css"
Vue.config.productionTip = false
import data from "./configjs/data.js"
import('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from "vue-awesome-swiper"
import swiper from "swiper"
import jquery from "jquery"
import axios from "axios"
import vueAxios from "vue-axios"
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

require("./configjs/iscroll5.js")//

Vue.use(MintUI);
Vue.use(vueAxios,axios);
Vue.use(VueAwesomeSwiper)

Vue.prototype.$iscroll=IScroll;

var tool = {
	install:function(Vue){
		Object.defineProperty(Vue.prototype,"$swiper",{
			value:swiper
		}),
		Object.defineProperty(Vue.prototype,"$jquery",{
			value:jquery
		}),
		Object.defineProperty(Vue.prototype,"$json",{
			value:data
		})
	}
}
Vue.use(tool)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
