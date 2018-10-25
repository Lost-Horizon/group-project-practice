'use strict'
// const getFormFields = require('../../lib/get-form-fields.js')
const api = require('../scripts/api.js')
const ui = require('./ui.js')

const onGetBooks = function () {
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.getBooksFailure)
}

const addHandlers = () => {
  $('#handlebars-template').on('click', onGetBooks)
}

module.exports = {
  // onGetBooks,
  addHandlers
}
