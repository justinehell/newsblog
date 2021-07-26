import Vue from 'vue';
import Router from 'vue-router';
import i18n from './i18n';
import Home from './views/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`,
    },
    {
      path: '/:lang',
      component: {
        render(c) {
          return c('router-view');
        },
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: 'news',
          name: 'news',
          component: () =>
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited
            import(/* webpackChunkName: "news" */ './views/News.vue'),
          props: true,
        },
      ],
    },
  ],
});
