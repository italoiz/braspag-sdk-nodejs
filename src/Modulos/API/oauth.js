
/**
 * Auth API.
 *
 * @class
 * @constructor
 *
 * @param {BraspagAPI} api
 */
class BraspagAuthAPI {
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
      ? 'https://authsandbox.braspag.com.br'
      : 'https://auth.braspag.com.br'
  }
}

module.exports = BraspagAuthAPI
