/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */

import CIButton from './CIButton.vue'
import CIButtonBlock from './CIButtonBlock.vue'
import CIButtonFAB from './CIButtonFAB.vue'
import CIButtonFlat from './CIButtonFlat.vue'

const CIButtons = {
  CIButton,
  CIButtonBlock,
  CIButtonFAB,
  CIButtonFlat
}

console.log('CIButtons', CIButtons)

CIButtons.plugin = plugin

if (window.Vue) {
  Vue.use(plugin)
}

export default CIButtons

function plugin(Vue) {
  for (let key in CIButtons) {
    Vue.component(CIButtons[key].name, CIButtons[key])
  }
}
