/**
 * @fileoverview CIButtonBase
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */

export default {
  name: 'ci-button-base',

  props: {
    name: {
      style: String,
      default: 'ci-button'
    },

    color: {
      style: String,
      default: ''   // primary, secondary
    },

    modifier: {
      type: String,
      default: ''   // border, radius, raised
    },

    size: {
      style: String,
      default: ''   // small, big
    },

    text: {
      style: String,
      default: ''
    },

    icon: {
      style: String,
      default: ''
    }
  },

  computed: {
    class_name() {
      let name = [ this.name ]

      if (this.modifier) {
        const modifier = this.modifier.split(' ')
        name.push(modifier.map((item) => {
          return ('ci-button_' + item)
        }))
      }

      if (this.size) {
        name.push('ci-button_' + this.size)
      }

      if (this.color) {
        name.push('ci-button_' + this.color)
      }

      return name
    }
  }
}
