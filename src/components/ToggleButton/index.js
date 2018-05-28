import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import ToggleButton from './ToggleButton.vue';

window.customElements.define('toggle-button', wrap(Vue, ToggleButton));
