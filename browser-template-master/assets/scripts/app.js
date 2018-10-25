'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('../book/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#get-books-button').on('click', authEvents.onGetBooks)

  authEvents.addHandlers()
})
