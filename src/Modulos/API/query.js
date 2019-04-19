/**
 * Query API.
 *
 * @class
 * @constructor
 *
 * @param {BraspagAPI} api
 */
class BraspagQueryAPI {
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
      ? 'https://apiquerysandbox.cieloecommerce.cielo.com.br'
      : 'https://apiquery.cieloecommerce.cielo.com.br'
  }
}

module.exports = BraspagQueryAPI
