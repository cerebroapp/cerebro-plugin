const plugin = require('../src/index')
const { assert } = require('chai')

describe('Plugin', () => {
  it('contains plugin function', () => {
    assert(typeof plugin.fn === 'function')
  })
})