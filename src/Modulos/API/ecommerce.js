/**
 * Ecommerce API.
 *
 * @class
 * @constructor
 *
 * @param {BraspagAPI} api
 */
class BraspagEcommerceAPI {
  constructor (api) {
    this.$api = api
  }

  /**
   * Base URL
   *
   * @method baseURL
   *
   * @return {String}
   */
  get baseURL () {
    return this.$api.isSandbox
      ? 'https://apisandbox.cieloecommerce.cielo.com.br'
      : 'https://api.cieloecommerce.cielo.com.br'
  }
}

module.exports = BraspagEcommerceAPI
