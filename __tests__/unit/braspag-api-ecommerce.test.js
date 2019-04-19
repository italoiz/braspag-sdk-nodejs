const { assert } = require('chai')
const BraspagAPI = require('../../src/Modulos/API')

describe('Módulo `API` | Ecommerce', () => {
  it('retorna url da API sandbox quando for `sandbox`', () => {
    const api = new BraspagAPI({ sandbox: true })
    assert.equal(api.ecommerce.baseURL, 'https://apisandbox.cieloecommerce.cielo.com.br')
  })

  it('retorna url da API de produção quando não for `sandbox`', () => {
    const api = new BraspagAPI({ sandbox: false })
    assert.equal(api.ecommerce.baseURL, 'https://api.cieloecommerce.cielo.com.br')
  })

  it('retorna url da API de produção quando `sandbox` não for informado', () => {
    const api = new BraspagAPI()
    assert.equal(api.ecommerce.baseURL, 'https://api.cieloecommerce.cielo.com.br')
  })
})
