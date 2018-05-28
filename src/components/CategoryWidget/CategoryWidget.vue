<template>
  <div>
    <h1>My Vue Web Component</h1>
    <button v-on:click="handleClick">{{ msg }}</button>
  </div>
</template>

<script>
  export default {
    props: ['msg'],
    methods: {
      handleClick: function (event) {
        this.$el.dispatchEvent(new Event('onCategoryClicked', { category: 'test' }))
      }
    }
  }
</script>
