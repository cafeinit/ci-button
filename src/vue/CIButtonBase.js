/**
 * @fileoverview CIButtonBase
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */

export default class CIButtonBase {
  constructor(name) {
    this.name = name ? ('ci-button-' + name) : 'ci-button'

    this.props = {
      name: {
        style: String,
        default: name
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
    }

    this.computed = {
      class_name() {
        let default_name = this.name ? ('ci-button_' + this.name) : 'ci-button'
        let name = [ default_name ]

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
}
