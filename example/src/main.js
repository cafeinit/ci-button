/**
 * @fileoverview main
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */

import Vue from 'vue'
import CIButtons from 'ci-buttons'
import App from './App.vue'

Vue.use(CIButtons.plugin)

var app = new Vue({
  el: '#app',
  components: {
    App
  }
})
