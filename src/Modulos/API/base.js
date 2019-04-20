const _ = require('lodash')
const axios = require('axios')
const BraspagConfig = require('../Config')

/**
 * Classe base para API.
 *
 * @class
 * @constructor
 *
 * @param {BraspagAPI} api
 */
class BaseAPI {
  constructor (api) {
    this.$api = api
  }

  /**
   * Axios instance
   *
   * @return {Object}
   */
  get instance () {
    return axios.create({
      baseURL: this.baseURL
    })
  }

  /**
   * Config
   *
   * @property
   *
   * @return {BraspagConfig}
   */
  get config () {
    let config = _.get(this.$api, '$config', {})

    if (_.isEmpty(config) || !(config instanceof BraspagConfig)) {
      config = new BraspagConfig(config)
    }

    return config
  }

  /**
   * GET
   *
   * @method
   *
   * @return {Function}
   */
  get get () {
    return this.instance.get
  }

  /**
   * POST
   *
   * @method
   *
   * @return {Function}
   */
  get post () {
    return this.instance.post
  }

  /**
   * PUT
   *
   * @method
   *
   * @return {Function}
   */
  get put () {
    return this.instance.put
  }
}

module.exports = BaseAPI
