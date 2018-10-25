const getBooks = function () {
  return $.ajax({
    url: 'https://wdi-library.herokuapp.com/books'
  })
}
