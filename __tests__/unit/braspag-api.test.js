const { assert } = require('chai')
const BraspagAPI = require('../../src/Modulos/API')

const BraspagAuthAPI = require('../../src/Modulos/API/oauth')
const BraspagEcommerceAPI = require('../../src/Modulos/API/ecommerce')
const BraspagQueryAPI = require('../../src/Modulos/API/query')
const BraspagSplitAPI = require('../../src/Modulos/API/split')

const BraspagConfig = require('../../src/Modulos/Config')

describe('Módulo `API`', () => {
  it('a propriedade `$config` deve ser uma instancia de `BraspagConfig`', () => {
    const api = new BraspagAPI()
    assert.instanceOf(api.$config, BraspagConfig)
  })

  it('retorna a api de `oauth` quando chamar a propriedade `auth`', () => {
    const api = new BraspagAPI()
    assert.property(api, 'auth')
    assert.instanceOf(api.auth, BraspagAuthAPI)
  })

  it('retorna a api de `ecommerce` quando chamar a propriedade `ecommerce`', () => {
    const api = new BraspagAPI()
    assert.property(api, 'ecommerce')
    assert.instanceOf(api.ecommerce, BraspagEcommerceAPI)
  })

  it('retorna a api de `consultas` quando chamar a propriedade `query`', () => {
    const api = new BraspagAPI()
    assert.property(api, 'query')
    assert.instanceOf(api.query, BraspagQueryAPI)
  })

  it('retorna a api de `split` quando chamar a propriedade `split`', () => {
    const api = new BraspagAPI()
    assert.property(api, 'split')
    assert.instanceOf(api.split, BraspagSplitAPI)
  })

  it('retorna valor `boolean` quando chamar `isSandbox`', () => {
    const api = new BraspagAPI()
    assert.isBoolean(api.isSandbox)
  })

  it('retorna `true` quando a api está em modo sandbox', () => {
    const api = new BraspagAPI({ sandbox: true })
    assert.equal(api.isSandbox, true)
  })

  it('retorna `false` se a propriedade sandbox não for informada', () => {
    const api = new BraspagAPI()
    assert.equal(api.isSandbox, false)
  })

  it('retorna `false` se a propriedade sandbox for `false`', () => {
    const api = new BraspagAPI({ sandbox: false })
    assert.equal(api.isSandbox, false)
  })
})
