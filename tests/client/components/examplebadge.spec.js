const Vue = require('vue')
const utils = require('../utils')

const ExampleBadge = require('../../../src/VueBadge.vue')

describe('Example Badge', () => {
  it('should mount successfully', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(ExampleBadge)
    })
    const carouselInstance = vm.$children[0]
    expect(carouselInstance._isMounted).toBe(true)

    return utils.expectToMatchSnapshot(vm)
  })
})