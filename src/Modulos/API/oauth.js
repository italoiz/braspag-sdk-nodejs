const BaseAPI = require('./base')

/**
 * Auth API.
 *
 * @class
 * @constructor
 *
 * @param {BraspagAPI} api
 */
class BraspagAuthAPI extends BaseAPI {
  /**
   * Base URL
   *
   * @method baseURL
   *
   * @return {String}
   */
  get baseURL () {
    return this.$api.isSandbox
      ? 'https://authsandbox.braspag.com.br'
      : 'https://auth.braspag.com.br'
  }

  /**
   * Authorization
   *
   * @method getAuthorization
   *
   * @return {String}
   */
  getAuthorization () {
    const merchantId = this.config.get('merchantId', null)
    const clientSecret = this.config.get('clientSecret', null)

    if (!merchantId || !clientSecret) {
      throw new Error('Credenciais inválidas. É obrigatório informar `MerchantId` e `ClientSecret`')
    }

    return Buffer.from(`${merchantId}:${clientSecret}`).toString('base64')
  }
}

module.exports = BraspagAuthAPI
