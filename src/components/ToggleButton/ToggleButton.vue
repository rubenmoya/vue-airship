<template>
  <label>
    <input
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      v-on:change="onToggleClick"
    />

    <span>{{label}}</span>
  </label>
</template>

<script>
  export default {
    props: ['default', 'label', 'disabled'],
    data: function () {
      return {
        checked: false,
      }
    },
    methods: {
      onToggleClick: function (event) {
        this.checked = !this.checked;

        this.$emit('onToggle', event);
      }
    }
  }
</script>

<style>

</style>
