const { BraspagPagador, BraspagSplit, BraspagUtils } = require('./Modulos')
const BraspagConfig = require('./Modulos/Config')
const BraspagAPI = require('./Modulos/API')

/**
 * Class principal Braspag.
 *
 * Responsavel pelo bootstrap e configuração do modulo.
 *
 * @class Braspag
 * @constructor
 *
 * @param {Object} config Configuração do módulo.
 */
class Braspag {
  constructor (config) {
    this.$config = new BraspagConfig(config)
    this.$api = new BraspagAPI(this.$config)
  }

  /**
   * Config.
   *
   * @return {BraspagConfig}
   */
  get config () {
    return this.$config
  }

  /**
   * API.
   *
   * @return {BraspagAPI}
   */
  get api () {
    return this.$api
  }

  /**
   * Módulo `Pagador`
   *
   * @return {BraspagPagador}
   */
  get Pagador () {
    return new BraspagPagador(this)
  }

  /**
   * Módulo `Split`
   *
   * @return {BraspagSplit}
   */
  get Split () {
    return new BraspagSplit(this)
  }

  /**
   * Módulo `Utils`
   *
   * @return {BraspagUtils}
   */
  get Utils () {
    return new BraspagUtils(this)
  }
}

module.exports = Braspag
