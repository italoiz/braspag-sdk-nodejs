const { assert } = require('chai')
const BraspagConfig = require('../../src/Modulos/Config')

describe('Módulo `Config`', () => {
  it('retorna o valor de uma determinada propriedade das configurações', () => {
    const config = new BraspagConfig({ merchantId: 'abc123' })
    const merchantId = config.get('merchantId')
    assert.equal(merchantId, 'abc123')
  })

  it('retorna o valor padrão quando não existir o valor atual', () => {
    const config = new BraspagConfig({})
    const clienteKey = config.get('clienteKey', 'abcdef123456')
    assert.equal(clienteKey, 'abcdef123456')
  })

  it('retorna o valor atual quando ele for `false`', () => {
    const config = new BraspagConfig({ sandbox: false })
    const sandbox = config.get('sandbox', true)
    assert.equal(sandbox, false)
  })

  it('retorna `undefined` quando não é definido um valor padrão', () => {
    const config = new BraspagConfig({})
    const clienteKey = config.get('clienteKey')
    assert.isUndefined(clienteKey)
  })

  it('define um valor para uma determinada propriedade', () => {
    const config = new BraspagConfig({})
    config.set('clienteKey', 'abcdef123456')
    const clienteKey = config.get('clienteKey', null)
    assert.equal(clienteKey, 'abcdef123456')
  })

  it('define um valor para uma determinada propriedade em subníveis', () => {
    const config = new BraspagConfig({})
    config.set('keys.cliente', {
      clienteKey: '123',
      secret: '321'
    })
    const clienteKey = config.get('keys.cliente.clienteKey')
    assert.equal(clienteKey, '123')
  })

  it('retorna valores boleanos quando são boleanos', () => {
    const config = new BraspagConfig({ sandbox: true })
    const sandbox = config.get('sandbox')
    assert.equal(sandbox, true)
  })

  it('mescla propriedade com os padrões informados', () => {
    const config = new BraspagConfig({
      credentials: {
        merchant: { merchantId: '123456' },
      }
    })

    const merchantCredentials = config.merge('credentials.merchant', {
      merchantKey: '654321'
    })

    assert.deepEqual(merchantCredentials, {
      merchantId: '123456',
      merchantKey: '654321'
    })
  })
})
