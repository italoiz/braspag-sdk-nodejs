/**
 * Ecommerce API.
 *
 * @class
 * @constructor
 *
 * @param {BraspagAPI} api
 */
class BraspagSplitAPI {
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
      ? 'https://splitsandbox.braspag.com.br'
      : 'https://split.braspag.com.br'
  }
}

module.exports = BraspagSplitAPI
