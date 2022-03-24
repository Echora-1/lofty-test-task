<template>
  <div>
    <label :for="id" class="base-label">
      {{ label }}
    </label>
    <div
      class="base-input-wrapper"
    >
      <input
        :id="id"
        class="base-input"
        v-bind="$attrs"
        :placeholder="$attrs.placeholder"
        :value="value"
        @focus="focusHandler"
        @input="inputHandler"
        @blur="blurHandler"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },

    id: {
      type: String,
      default: '',
    },

    label: {
      type: String,
      default: '',
    },

  },

  data() {
    return {
      focused: false,
    };
  },

  methods: {
    inputHandler(event) {
      this.$emit('input', event.target.value);
    },

    focusHandler() {
      this.focused = true;
    },

    blurHandler() {
      this.focused = false;
    },
  },
};
</script>

<style scoped lang="scss">

.base-input-wrapper {
  border: none;
  width: 100%;
  margin-top: 8px;
  background: #393E48;
  padding: 6px 4px;
}

.base-input {
  width: 100%;
  height: 30px;
  margin: 0;
  border: none;
  outline: none;
  padding: 3px 6px;
  background: transparent;
  color: #CCCCCC;

  &::placeholder {
     color: #CCCCCC;
   }
}

.base-label {
  color: #F4CC3E;
  font-size: 18px;
}
</style>
