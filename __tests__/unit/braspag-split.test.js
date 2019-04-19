const { assert } = require('chai')
const BraspagSplit = require('../../src/Modulos/Split')

describe('Módulo `Split`', () => {
  it('não deve ser `undefined`', () => {
    assert.exists(BraspagSplit)
  })
})
