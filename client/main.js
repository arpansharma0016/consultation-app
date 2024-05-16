import Vue from 'vue';
import {DateTime as luxon} from 'luxon';
import VueRouter from 'vue-router';
import '../imports/client/plugins/index';
import '../imports/client/mixins/index';
import App from '../imports/client/App.vue';
import router from '../imports/client/router';
import vuetify from '../imports/client/plugins/vuetify';

DateTime = luxon;
Meteor.startup(() => {
  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    ...App,
    router,
    vuetify,
  });
});
