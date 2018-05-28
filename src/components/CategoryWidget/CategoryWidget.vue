<template>
  <button v-on:click="handleClick">{{ msg }}</button>
</template>

<script>
  export default {
    props: ['msg'],
    methods: {
      handleClick: function (event) {
        this.$emit('onCategoryClicked', { category: 'test' })
      }
    }
  }
</script>
