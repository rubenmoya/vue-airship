<template>
  <section class="CA-Widget">
    <header>
      <h1 class="CA-Widget--Title">{{title}}</h1>
      <p class="CA-Widget--Description">{{description}}</p>
    </header>

    <slot/>
  </section>
</template>

<script>
  export default {
    props: ['title', 'description'],
  }
</script>

<style>
  .CA-Widget {
    width: 296px;
    box-sizing: border-box;
    text-align: left;
    background: var(--background-color, #FFF);
    padding: 24px;
  }

  .CA-Widget--Title {
    color: rgb(44, 44, 44);
    font-family: Roboto, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
  }

  .CA-Widget--Description {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: 12px;
    line-height: 16px;
    color: rgb(116, 116, 116);
    margin: 0px 0px 12px;
  }
</style>
