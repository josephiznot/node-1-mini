var books = [];
var id = 0;
module.exports({
  create: function(req, res) {
    const { title, author } = request.body;
    books.push({ id, title, author });
    id++;
    req.status(200).send(books);
  },
  read: function(req, res) {
    req.status(200).send(books);
  },
  update: function(req, res) {
    const updateId = req.params.id;
    let index = books.findIndex(books => books.id === updateId);

    books[index] = {
    id: books[index].id;
    title: books[index].title || req.body.title;
    author: books[index].authr || req.body.author;
    }
    var index = req.status(200).send(books);
  },
  delete: function() {
      const deleteId = req.params.id;
      var bookID = books.findIndex(book=>book.id === deleteId);
      books.splice(bookID, 1);
      req.status(200).send(books);
  }
});
