import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(() => <HelloWorld msg="Hello Vitest!"></HelloWorld>)
    expect(wrapper.text()).toContain('Hello Vitest!')
  })
})
