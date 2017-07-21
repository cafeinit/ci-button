/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */

import CIButton from './CIButton.vue'
import CIButtonBlock from './CIButtonBlock.vue'
import CIButtonFAB from './CIButtonFAB.vue'
import CIButtonFlat from './CIButtonFlat.vue'

const components = {
  CIButton,
  CIButtonBlock,
  CIButtonFAB,
  CIButtonFlat
}

const CIButtons = {
  name: 'CIButtons',
  version: '1.1.0',
  plugin: plugin,

  CIButton,
  CIButtonBlock,
  CIButtonFAB,
  CIButtonFlat
}

if (window.Vue) {
  Vue.use(plugin)
}

window.CIButtons = CIButtons

export default CIButtons

function plugin(Vue) {
  for (let key in components) {
    Vue.component(components[key].name, components[key])
  }
}
