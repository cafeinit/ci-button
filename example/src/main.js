/**
 * @fileoverview main
 * @author burning (www.cafeinit.com)
 * @version 2017.07.21
 */

import Vue from 'vue'
import CIUIBase from 'ci-ui-base'
import CIButton from 'ci-button'
import App from './App.vue'

Vue.use(CIUIBase.plugin)
Vue.use(CIButton.plugin)

var app = new Vue({
  el: '#app',
  components: {
    App
  }
})
