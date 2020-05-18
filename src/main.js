// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Header from '~/layouts/Header.vue'
import GridDefault from '~/layouts/GridDefault.vue'

import '~/assets/styles/styles.scss'

export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Header', Header)
    Vue.component('GridDefault', GridDefault)
}
