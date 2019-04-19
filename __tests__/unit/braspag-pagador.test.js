const { assert } = require('chai')
const BraspagPagador = require('../../src/Modulos/Pagador')

describe('Módulo `Pagador`', () => {
  it('não deve ser `undefined`', () => {
    assert.exists(BraspagPagador)
  })
})
