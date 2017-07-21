/**
 * @fileoverview main
 * @author burning (www.cafeinit.com)
 * @version 2017.07.21
 */

import Vue from 'vue'
import CIUIBase from 'ci-ui-base'
import CIButtons from 'ci-buttons'
import App from './App.vue'

Vue.use(CIUIBase.plugin)
Vue.use(CIButtons.plugin)

var app = new Vue({
  el: '#app',
  components: {
    App
  }
})
