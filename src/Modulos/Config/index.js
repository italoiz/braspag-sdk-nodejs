const _ = require('lodash')

/**
 * Classe para configuração do módulo Braspag.
 *
 * @class BraspagConfig
 * @constructor
 *
 * @param {object} config Configurações do módulo Braspag.
 */
class BraspagConfig {
  constructor (config) {
    this._config = config
  }

  /**
   * Get
   *
   * @method get
   *
   * @param {String} prop
   * @param {Mixed}  defaultValue
   *
   * @return {Mixed}
   */
  get (prop, defaultValue) {
    return _.get(this._config, prop, defaultValue)
  }

  /**
   * Set
   *
   * @method set
   *
   * @param {String} prop
   * @param {Mixed} defaultValues
   *
   * @return {void}
   */
  set (prop, value) {
    _.set(this._config, prop, value)
  }

  /**
   * Merge
   *
   * @method merge
   *
   * @param {String} prop
   * @param {Object} defaultValue
   *
   * @return {Object}
   */
  merge (prop, defaultValues) {
    const value = this.get(prop, {})
    return _.merge(defaultValues, value)
  }
}

module.exports = BraspagConfig
