const BraspagAuthAPI = require('./oauth')
const BraspagEcommerceAPI = require('./ecommerce')
const BraspagQueryAPI = require('./query')
const BraspagSplitAPI = require('./split')
const BraspagConfig = require('../Config')

/**
 * Classe Braspag API
 *
 * @class
 *
 * @param {BraspagConfig} config.
 */
class BraspagAPI {
  constructor (config) {
    this._setConfig(config)
  }

  /**
   * Set Config.
   *
   * @private
   *
   * @return {void}
   */
  _setConfig (config) {
    if (!(config instanceof BraspagConfig)) {
      config = new BraspagConfig(config)
    }
    this.$config = config
  }

  /**
   * Sandbox
   *
   * @method isSandbox
   *
   * @return {Boolean}
   */
  get isSandbox () {
    const sandbox = this.$config.get('sandbox', false)
    return sandbox === true
  }

  /**
   * API de `Autenticação`.
   *
   * @return {BraspagAuthAPI}
   */
  get auth () {
    return new BraspagAuthAPI(this)
  }

  /**
   * API de `E-Commerce`
   *
   * @return {BraspagEcommerceAPI}
   */
  get ecommerce () {
    return new BraspagEcommerceAPI(this)
  }

  /**
   * API de `Query` / `Consultas`.
   *
   * @return {BraspagQueryAPI}
   */
  get query () {
    return new BraspagQueryAPI(this)
  }

  /**
   * API de `Split`
   *
   * @return {BraspagSplitAPI}
   */
  get split () {
    return new BraspagSplitAPI(this)
  }
}

module.exports = BraspagAPI
