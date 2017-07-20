<template lang="pug">
  button.ci-button(:class="class_name")
    span.ci-button__text(v-if="text") {{text}}
    i.ci-button__icon.material-icons(v-if="icon") {{icon}}
    slot
</template>

<script>
/**
 * @fileoverview CIButton
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */

export default {
  name: 'ci-button',

  props: {
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
      let name = []
      if (this.modifier) {
        name = this.modifier.split(' ')
        name = name.map((item) => {
          return ('ci-button_' + item)
        })
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
</script>
