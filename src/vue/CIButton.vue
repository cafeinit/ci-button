<template lang="pug">
button(:class="className" @click="onClick")
  span.ci-button__text(v-if="text") {{text}}
  i.ci-button__icon.material-icons(v-if="icon") {{icon}}
  i.ci-button__icon(v-if="iconClassName" :class="iconClassName")
  slot
</template>

<script>
/**
 * @fileoverview CIButton
 * @author burning (www.cafeinit.com)
 * @version 2017.08.03
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
    },

    iconClassName: {
      type: String,
      default: ''
    }
  },

  computed: {
    className() {
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
  },

  methods: {
    onClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
