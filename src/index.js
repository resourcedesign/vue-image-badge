import VueBadge from './VueImageBadge.vue'

const install = (Vue) => {
  Vue.component('vue-image-badges', VueBadge)
}

export default {
  install
}

export {
  VueBadge
}
