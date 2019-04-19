const { assert } = require('chai')
const BraspagAPI = require('../../src/Modulos/API')

describe('Módulo `API` | Split', () => {
  it('retorna url da API sandbox quando for `sandbox`', () => {
    const api = new BraspagAPI({ sandbox: true })
    assert.equal(api.split.baseURL, 'https://splitsandbox.braspag.com.br')
  })

  it('retorna url da API de produção quando não for `sandbox`', () => {
    const api = new BraspagAPI({ sandbox: false })
    assert.equal(api.split.baseURL, 'https://split.braspag.com.br')
  })

  it('retorna url da API de produção quando `sandbox` não for informado', () => {
    const api = new BraspagAPI()
    assert.equal(api.split.baseURL, 'https://split.braspag.com.br')
  })
})
