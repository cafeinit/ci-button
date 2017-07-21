<template lang="pug">
  button(:class="class_name")
    span.ci-button__text(v-if="text") {{text}}
    i.ci-button__icon.material-icons(v-if="icon") {{icon}}
    slot
</template>

<script>
/**
 * @fileoverview CIButton
 * @author burning (www.cafeinit.com)
 * @version 2017.07.21
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
      default: ''   // border, radius, raised, block fab flat
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
      let name = [ 'ci-button' ]

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
</script>
