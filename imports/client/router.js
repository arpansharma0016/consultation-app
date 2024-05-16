import VueRouter from 'vue-router';

const router = new VueRouter({
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/home.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./pages/signup.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./pages/signin.vue'),
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: () => import('./pages/onboarding.vue'),
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('./pages/account.vue'),
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('./pages/chat.vue'),
      children: [
        {
          path: ':id',
          name: 'chatDetails',
          component: () => import('./pages/components/chatPage.vue'),
        },
      ],
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('./pages/details.vue'),
    },
    {
      path: '/extra',
      name: 'extra',
      component: () => import('./pages/extra.vue'),
    },
  ],
  mode: 'history',
});

export default router;
