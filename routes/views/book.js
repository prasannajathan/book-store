var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'books';
  locals.filters = {
    book: req.params.book
  }
  locals.data = {
    books:[]
  }

view.on('init', function(next){
  var q = keystone.list('Book').model.findOne({
    slug: locals.filters.book
  });

  q.exec(function(err, result){
    locals.data.book = result;
    next(err);
  });
});

  // Render View
  view.render('book');
}