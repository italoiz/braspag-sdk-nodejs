const { assert } = require('chai')
const BraspagAPI = require('../../src/Modulos/API')

describe('Módulo `API` | OAuth', () => {
  it('retorna url da API sandbox quando for `sandbox`', () => {
    const api = new BraspagAPI({ sandbox: true })
    assert.equal(api.auth.baseURL, 'https://authsandbox.braspag.com.br')
  })

  it('retorna url da API de produção quando não for `sandbox`', () => {
    const api = new BraspagAPI({ sandbox: false })
    assert.equal(api.auth.baseURL, 'https://auth.braspag.com.br')
  })

  it('retorna url da API de produção quando `sandbox` não for informado', () => {
    const api = new BraspagAPI()
    assert.equal(api.auth.baseURL, 'https://auth.braspag.com.br')
  })

  it('deve existir um método `getAuthorization`', () => {
    const api = new BraspagAPI()
    assert.property(api.auth, 'getAuthorization')
  })

  it('o método `getAuthorization` deve retornar um token de autorização válido', () => {
    const merchantId = '1234'
    const clientSecret = 'abcd'
    const validToken = Buffer.from(`${merchantId}:${clientSecret}`).toString('base64')

    const api = new BraspagAPI({ merchantId, clientSecret })
    const token = api.auth.getAuthorization()

    assert.equal(token, validToken)
  })

  it('o método `getAuthorization` deve retornar um erro se não encontrar a propriedade `merchantId`', () => {
    const api = new BraspagAPI({ clientSecret: 'abcd' })

    assert.throw(api.auth.getAuthorization.bind(api.auth), Error)
    assert.throw(api.auth.getAuthorization.bind(api.auth), 'Credenciais inválidas. É obrigatório informar `MerchantId` e `ClientSecret`')
  })

  it('o método `getAuthorization` deve retornar um erro se não encontrar a propriedade `clientSecret`', () => {
    const api = new BraspagAPI({ merchantId: '1234' })

    assert.throw(api.auth.getAuthorization.bind(api.auth), Error)
    assert.throw(api.auth.getAuthorization.bind(api.auth), 'Credenciais inválidas. É obrigatório informar `MerchantId` e `ClientSecret`')
  })

  it('o método `getAuthorization` deve retornar um erro se não encontrar a propriedade `merchantId` ou `clientSecret`', () => {
    const api = new BraspagAPI()

    assert.throw(api.auth.getAuthorization.bind(api.auth), Error)
    assert.throw(api.auth.getAuthorization.bind(api.auth), 'Credenciais inválidas. É obrigatório informar `MerchantId` e `ClientSecret`')
  })
})
