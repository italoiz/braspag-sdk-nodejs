const { assert } = require('chai')
const BraspagUtils = require('../../src/Modulos/Utils')

describe('Módulo `Utils`', () => {
  it('não deve ser `undefined`', () => {
    assert.exists(BraspagUtils)
  })
})
