var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'books';

  // Load Books
  view.query('books', keystone.list('Book').model.find());

  // Render View
  view.render('books');
}