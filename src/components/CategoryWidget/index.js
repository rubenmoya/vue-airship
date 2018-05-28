import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import CategoryWidget from './CategoryWidget.vue';

window.customElements.define('category-widget', wrap(Vue, CategoryWidget));
