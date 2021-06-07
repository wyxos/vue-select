<template>
  <div id="app">
    <p>Example: Basic</p>
    <div>
      <vue-select :options="options" v-model="model"></vue-select>
    </div>

    <p>Example: Custom option template</p>
    <div>
      <vue-select :options="options2" v-model="model2">
        <template v-slot:label="{option}">
          {{ option.content.custom }}
        </template>
        <template v-slot:option="{option}">
          {{ option.content.custom }}
        </template>
      </vue-select>
    </div>

    <p>Example: Format v-model output and restore selection from external update</p>
    <div>
      <vue-select :options="options3" v-model="model3"
                  :format-output="(selection) => selection.map(item => item.content.value)"
                  :external-update="(model, item) => model.indexOf(item.content.value) > -1">
        <template v-slot:label="{option}">
          {{ option.content.custom }} - {{ option.isSelected }}
        </template>
        <template v-slot:option="{option}">
          {{ option.content.custom }} - {{ option.isSelected }}
        </template>
      </vue-select>
      {{ model3 }}
      <button @click="setSelection">Set selection</button>
    </div>

    <p>Example: Restore on load</p>
    <div>
      <vue-select :options="options4" v-model="model4"
                  :format-output="(selection) => selection.map(item => item.content.value)"
                  :external-update="(model, item) => model.indexOf(item.content.value) > -1">
        <template v-slot:label="{option}">
          {{ option.content.custom }} - {{ option.isSelected }}
        </template>
        <template v-slot:option="{option}">
          {{ option.content.custom }} - {{ option.isSelected }}
        </template>
      </vue-select>
      {{ model4 }}
      <button @click="setSelection">Set selection</button>
    </div>
  </div>
</template>

<script>
import VueSelect from './components/VueSelect'

export default {
  name: 'App',
  components: {
    VueSelect
  },
  data () {
    return {
      options: [
        {
          label: 'Value 1',
          value: 'value-1'
        },
        {
          label: 'Value 2',
          value: 'value-2'
        },
        {
          label: 'Value 3',
          value: 'value-3'
        }
      ],
      model: [],

      options2: [
        {
          custom: 'Value 1',
          value: 'value-1'
        },
        {
          custom: 'Value 2',
          value: 'value-2'
        },
        {
          custom: 'Value 3',
          value: 'value-3'
        }
      ],
      model2: [],

      options3: [
        {
          custom: 'Value 1',
          value: 'value-1'
        },
        {
          custom: 'Value 2',
          value: 'value-2'
        },
        {
          custom: 'Value 3',
          value: 'value-3'
        }
      ],
      model3: [],

      options4: [
        {
          custom: 'Value 1',
          value: 'value-1'
        },
        {
          custom: 'Value 2',
          value: 'value-2'
        },
        {
          custom: 'Value 3',
          value: 'value-3'
        }
      ],
      model4: ['value-1', 'value-2']
    }
  },
  methods: {
    setSelection () {
      this.model3 = ['value-1', 'value-2']
    }
  }
}
</script>
