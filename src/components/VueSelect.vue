<template>
  <div>
    <div @click="toggleSelect">
      <div v-if="!selection.length">
        Please select
      </div>
      <div v-else>
        <span v-for="(item, index) in selection" :key="index">
          <slot name="label" v-bind:option="item">
            {{ item }}
          </slot>
        </span>
      </div>
    </div>
    <div v-if="show">
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
    formatOutput: {
      type: Function
    },
    externalUpdate: {
      type: Function,
      default (model, item) {
        throw Error('external-update callback undefined on component.')
      }
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
    }
  }
}
</script>
