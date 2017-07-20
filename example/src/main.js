/**
 * @fileoverview main
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */

import Vue from 'vue'
import CIUIButton from 'ci-ui-button'
import App from './App.vue'

Vue.use(CIUIButton.plugin)

var app = new Vue({
  el: '#app',
  components: {
    App
  }
})
