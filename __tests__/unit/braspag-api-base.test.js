const { assert } = require('chai')
const BraspagBaseAPI = require('../../src/Modulos/API/base')
const BraspagConfig = require('../../src/Modulos/Config')

describe('Módulo `API` | Base', () => {
  it('deve conter uma propriedade `instance`', () => {
    const baseAPI = new BraspagBaseAPI()
    assert.property(baseAPI, 'instance')
  })

  it('a propriedade `instance` deve retornar um objeto', () => {
    const baseAPI = new BraspagBaseAPI()
    assert.instanceOf(baseAPI.instance, Object)
  })

  it('deve conter uma propriedade `get`', () => {
    const baseAPI = new BraspagBaseAPI()
    assert.property(baseAPI, 'get')
  })

  it('deve conter uma propriedade `post`', () => {
    const baseAPI = new BraspagBaseAPI()
    assert.property(baseAPI, 'post')
  })

  it('deve conter uma propriedade `put`', () => {
    const baseAPI = new BraspagBaseAPI()
    assert.property(baseAPI, 'put')
  })

  it('a propriedade `get` deve retornar uma função', () => {
    const baseAPI = new BraspagBaseAPI()
    assert.instanceOf(baseAPI.get, Function)
  })

  it('a propriedade `post` deve retornar uma função', () => {
    const baseAPI = new BraspagBaseAPI()
    assert.instanceOf(baseAPI.post, Function)
  })

  it('a propriedade `put` deve retornar uma função', () => {
    const baseAPI = new BraspagBaseAPI()
    assert.instanceOf(baseAPI.put, Function)
  })

  it('deve conter uma propriedade `config`', () => {
    const baseAPI = new BraspagBaseAPI()
    assert.property(baseAPI, 'config')
  })

  it('a propriedade `config` deve retornar um objeto de instancia `BraspagConfig`', () => {
    const baseAPI = new BraspagBaseAPI()
    assert.instanceOf(baseAPI.config, BraspagConfig)
  })

  it('um objeto `$config` passado para `BraspagBaseAPI` deve ser convertido para `BraspagConfig`', () => {
    const $config = { sandbox: true }
    const baseAPI = new BraspagBaseAPI({ $config })
    const sandbox = baseAPI.config.get('sandbox', false)

    assert.equal(sandbox, true)
    assert.instanceOf(baseAPI.config, BraspagConfig)
  })

  it('um objeto vazio `$config` passado para `BraspagBaseAPI` deve ser convertido para `BraspagConfig`', () => {
    const $config = {}
    const baseAPI = new BraspagBaseAPI({ $config })
    const sandbox = baseAPI.config.get('sandbox', false)

    assert.equal(sandbox, false)
    assert.instanceOf(baseAPI.config, BraspagConfig)
  })
})
