import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import Widget from './Widget.vue';

window.customElements.define('airship-widget', wrap(Vue, Widget));
