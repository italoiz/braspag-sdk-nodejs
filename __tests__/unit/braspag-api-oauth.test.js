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
})
