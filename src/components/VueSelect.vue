<template>
  <div v-click-outside="externalClick" class="custom-select">
    <div @click="toggleSelect" class="selection">
      <div v-if="!selection.length">
        {{ placeholder }}
      </div>
      <div v-else>
        <span v-if="selectionLabel">
          {{ selectionLabel(selection) }}
        </span>
        <template v-else>
          <span v-for="(item, index) in selection" :key="index">
          <slot name="label" v-bind:option="item">
            {{ item }},
          </slot>
        </span>
        </template>
      </div>
    </div>
    <div v-if="show" class="dropdown">
      <ul>
        <li v-for="(item, index) in items"
            :class="{active: item.isSelected}"
            @click="toggle(item)"
            :key="index">
          <slot name="option" v-bind:option="item">
            {{ item }}
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueSelect',
  props: {
    options: {
      required: true,
      type: Array
    },
    placeholder: {
      type: String,
      default: 'Please select'
    },
    formatOutput: {
      type: Function
    },
    externalUpdate: {
      type: Function,
      default (model, item) {
        throw Error('external-update callback undefined on component.')
      }
    },
    selectionLabel: {
      type: Function
    },
    value: {}
  },
  data () {
    return {
      show: false,
      items: [],
      changedByInteraction: false
    }
  },
  mounted () {
    this.setItems()

    this.restoreSelection()
  },
  computed: {
    selection () {
      return this.items.filter(option => option.isSelected)
    }
  },
  watch: {
    options () {
      this.setItems()
    },
    value () {
      if (this.changedByInteraction) {
        this.changedByInteraction = false

        return
      }
      this.restoreSelection()
    }
  },
  methods: {
    setItems () {
      this.items = JSON.parse(JSON.stringify(this.options))
        .map(item => {
          return {
            isSelected: false,
            content: item
          }
        })
    },
    toggle (option) {
      option.isSelected = !option.isSelected

      const selection = JSON.parse(JSON.stringify(this.selection))
        .map(item => {
          delete item.isSelected

          return item
        })

      this.$emit('input', this.formatOutput ? this.formatOutput(selection) : selection)

      this.changedByInteraction = true
    },
    toggleSelect () {
      this.show = !this.show
    },
    restoreSelection () {
      this.items.forEach(item => {
        item.isSelected = this.externalUpdate(this.value, item)
      })
    },
    externalClick (event) {
      this.show = false
    }
  },
  directives: {
    'click-outside': {
      bind (el, binding) {
        const { bubble } = binding.modifiers
        const ua = navigator.userAgent
        const event = (ua.match(/iPad|iPhone/i)) ? 'touchstart' : 'click'
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
          }
        }
        el.vueClickOutside = handler
        document.addEventListener(event, handler)
      },
      unbind (el) {
        const ua = navigator.userAgent
        const event = (ua.match(/iPad|iPhone/i)) ? 'touchstart' : 'click'
        document.removeEventListener(event, el.vueClickOutside)
        el.vueClickOutside = null
      }
    }
  }
}
</script>
