import Vue from 'vue'
import jest from '../../../src/components/jest.vue'

describe('jest.test.js', () => {
  let Cmp, vm
  beforeEach(() => {
    Cmp = Vue.extend(jest)
    vm = new Cmp({
      data: {
        messages: ['cat']
      }
    }).$mount()
  })

  it('equals messages to ["cat"]', () => {
    expect(vm.messages).toEqual(['cat'])
  })

  it('has the expected html structure', () => {
    expect(vm.$el).toMatchSnapshot();
  })
})
