<template>
  <section>
    <header>
      <h1 class="CDB-Title">{{title}}</h1>
      <p>{{description}}</p>
    </header>

    <ul>
      <li v-for="category in categories" v-on:click="onCategoryClick(category.name)">
        <p>{{category.name}}</p>
        <span>{{category.value}}</span>
        <div>{{category.percentage}}</div>
        <div>Selected: {{category.selected ? 'YES' : 'NO'}}</div>
      </li>
    </ul>
  </section>
</template>

<script>
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
