<template>
  <ul class="CA-CategoryWidget--List">
    <li
      class="CA-CategoryWidget--ListItem"
      v-for="({ name, value }) in categories"
      @click="onCategoryClick(name)"
      :key="name"
    >
      <p class="CA-CategoryWidget--ListItem-Name">
        {{name}}
      </p>

      <span class="CA-CategoryWidget--ListItem-Value">
        {{readableNumber(value)}}
      </span>

      <div class="CA-CategoryWidget--ListItem-Progress">
        <span
          class="CA-CategoryWidget--ListItem-ProgressBar"
          :class="{ 'u-active': isSelected(name) }"
          :style="{ width: `${getPercentage(value)}%` }"
        ></span>
      </div>
    </li>
  </ul>
</template>

<script>
  import NumbersUtils from '../../utils/numbers';

  export default {
    props: {
      data: {
        type: String,
        default: '[]'
      },
      max: {
        type: String,
        default: '0'
      },
      selected: {
        type: Array,
        default: function () {
          return []
        }
      }
    },

    computed: {
      categories() {
        return JSON.parse(this.data);
      },
    },

    methods: {
      onCategoryClick(categoryName) {
        this._toggleSelected(categoryName);
        this.$emit('onCategoryClicked', this.selected);
      },

      getPercentage(value) {
        return value / this.max * 100
      },

      isSelected(name) {
        return this.selected.length === 0 || this.selected.includes(name)
      },

      readableNumber(value) {
        return NumbersUtils.short(value);
      },

      _toggleSelected(categoryName) {
        const index = this.selected.indexOf(categoryName);

        index !== -1
          ? this.selected.splice(index, 1)
          : this.selected.push(categoryName);

        if (this.selected.length === this.categories.length) {
          this.selected.splice(0, this.selected.length);
        }
      },
    }
  }
</script>

<style>
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
