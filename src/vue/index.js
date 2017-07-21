/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */

import CIButton from './CIButton.vue'

CIButton.version = '1.1.0'
CIButton.plugin = plugin

if (window.Vue) {
  Vue.use(plugin)
}

window.CIButton = CIButton

export default CIButton

function plugin(Vue) {
  Vue.component(CIButton.name, CIButton)
}
