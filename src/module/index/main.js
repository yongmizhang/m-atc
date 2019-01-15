// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import cn from './languages/cn';
import en from './languages/en';
import fr from './languages/fr';
import jp from './languages/jp';
import ko from './languages/ko';
import publicLuangeBag from '@/languages/public';
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
Object.assign(cn, publicLuangeBag.cn);
Object.assign(en, publicLuangeBag.en);
Object.assign(fr, publicLuangeBag.fr);
Object.assign(jp, publicLuangeBag.jp);
Object.assign(ko, publicLuangeBag.ko);
const langChose = window.localStorage && window.localStorage.getItem('langChose') || 'en';
const i18n = new VueI18n({
	//定义默认语言
	locale: langChose, 
	messages: {
		'cn': cn,
		'en': en,
		'fr': fr,
		'jp': jp,
		'ko': ko
	}
})
// new Vue({ i18n }).$mount('#app')
  

Vue.config.productionTip = false;
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  i18n
});
