<template>
  <section class="CA-CategoryWidget">
    <header>
      <h1 class="CA-CategoryWidget--Title">{{title}}</h1>
      <p class="CA-CategoryWidget--Description">{{description}}</p>
    </header>

    <ul class="CA-CategoryWidget--List">
      <li class="CA-CategoryWidget--ListItem" v-for="category in categories" v-on:click="onCategoryClick(category.name)">
        <p class="CA-CategoryWidget--ListItem-Name">{{category.name}}</p>
        <span class="CA-CategoryWidget--ListItem-Value">{{category.shortenValue}}</span>
        <div class="CA-CategoryWidget--ListItem-Progress">
          <span class="CA-CategoryWidget--ListItem-ProgressBar" v-bind:class="{ 'u-active': selected.length === 0 || selected.includes(category.name) }" v-bind:style="{ width: `${category.percentage}%` }"></span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  import NumbersUtils from '../../utils/numbers';

  export default {
    props: ['title', 'description', 'data', 'max'],
    data: function () {
      return {
        selected: [],
      };
    },
    computed: {
      categories: function () {
        const categories = JSON.parse(this.data);
        return categories.map(category => ({
          ...category,
          shortenValue: NumbersUtils.short(category.value),
          percentage: category.value / this.max * 100,
          selected: this.selected.includes(category.name)
        }))
      },
    },
    methods: {
      onCategoryClick: function (categoryName) {
        this._toggleSelected(categoryName);
        this.$emit('onCategoryClicked', this.selected);
      },
      _toggleSelected: function (categoryName) {
        const nextSelected = this.selected.includes(categoryName)
          ? this.selected.filter(category => category !== categoryName)
          : [...this.selected, categoryName];

        this.selected = nextSelected;
      }
    }
  }
</script>

<style>
  .CA-CategoryWidget {
    width: 296px;
    box-sizing: border-box;
    text-align: left;
    background: rgb(255, 255, 255);
    padding: 24px;
  }

  .CA-CategoryWidget--Title {
    color: rgb(44, 44, 44);
    font-family: Roboto, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
  }

  .CA-CategoryWidget--Description {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: 12px;
    line-height: 16px;
    color: rgb(116, 116, 116);
    margin: 0px 0px 12px;
  }

  .CA-CategoryWidget--List {
    padding: 0px;
    list-style: none;
  }

  .CA-CategoryWidget--ListItem {
    display: flex;
    flex-wrap: wrap;
    cursor: default;
    margin-bottom: 8px;
  }

  .CA-CategoryWidget--ListItem-Name  {
    color: rgb(44, 44, 44);
    font-family: Roboto, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    margin: 0px;
    flex: 1 1 70%;
    overflow: hidden;
  }

  .CA-CategoryWidget--ListItem-Value  {
    color: rgb(44, 44, 44);
    font-family: Roboto, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-align: right;
    font-size: 12px;
    line-height: 20px;
    margin: 0px;
    flex: 1 1 30%;
  }

  .CA-CategoryWidget--ListItem-Progress {
    height: 4px;
    width: 100%;
    position: relative;
    border-radius: 2px;
    background: rgb(245, 245, 245);
  }

  .CA-CategoryWidget--ListItem-ProgressBar {
    content: "";
    background-color: transparent;
    width: 100%;
    height: 4px;
    position: absolute;
    max-width: 100%;
    left: 0px;
    border-radius: 2px;
    transition: background 0.2s ease;
  }

  .CA-CategoryWidget--ListItem-ProgressBar.u-active {
    background-color: #47db99;
  }
</style>
