/**
 * Módulo Pagador
 *
 * @class
 * @constructor
 *
 * @param {Braspag} braspag
 */
class BraspagPagador {
  constructor (braspag) {
    this.$braspag = braspag
  }
}

module.exports = BraspagPagador
