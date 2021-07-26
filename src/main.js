import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

import 'tailwindcss/tailwind.css';

Vue.config.productionTip = false;

Vue.filter('capitalize', function(value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'en';
  }

  // set the current language for i18n
  i18n.locale = language;
  next();
});

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
