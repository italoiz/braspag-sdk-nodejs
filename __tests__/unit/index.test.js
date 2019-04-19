const { assert } = require('chai')
const Braspag = require('../../src')

const BraspagConfig = require('../../src/Modulos/Config')
const BraspagAPI = require('../../src/Modulos/API')

describe('Módulo `Braspag`', () => {
  it('propriedade `Pagador` deve existir no módulo principal', () => {
    const braspag = new Braspag()
    assert.property(braspag, 'Pagador')
  })

  it('propriedade `Split` deve existir no módulo principal', () => {
    const braspag = new Braspag()
    assert.property(braspag, 'Split')
  })

  it('propriedade `Utils` deve existir no módulo principal', () => {
    const braspag = new Braspag()
    assert.property(braspag, 'Utils')
  })

  it('propriedade `config` deve ser instância de `BraspagConfig`', () => {
    const braspag = new Braspag()
    assert.instanceOf(braspag.config, BraspagConfig)
  })

  it('propriedade `api` deve ser instância de `BraspagAPI`', () => {
    const braspag = new Braspag()
    assert.instanceOf(braspag.api, BraspagAPI)
  })
})
