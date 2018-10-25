'use strict'

const showBooksTemplate = require('../scripts/templates/helpers/team-listing.handlebars')

const getBooksSuccess = function (data) {
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('#handlebars-template').html(showBooksHtml)
  // $('#get-books-button').on('submit', (event) => {
  //   event.preventDefault()
  // })
}

const getBooksFailure = function () {
  $('#handlebars-template').html('Something went wrong with server')
  $('#handlebars-template').css('color', 'red')
}



module.exports = {
  getBooksSuccess,
  getBooksFailure
}
