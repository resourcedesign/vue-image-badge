import VueBadge from "./VueBadge.vue"

const install = (Vue) => {
  Vue.component("badge", VueBadge)
}

export default {
  install,
}

export {
  VueBadge,
}
