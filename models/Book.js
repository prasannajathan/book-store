var keystone = require('keystone');
var Types = keystone.Field.Types;

var Book = new keystone.List('Book', {
  map: {name: 'title'},
  singular:'Book',
  plural: 'Books',
  autokey: {path: 'slug', from: 'title', unique: true}
});

Book.add({
  title: {type: String, requried: true},
  author: {type: String},
  price: {type: Number},
  description: {type: Types.Html, wysiwyg: true, height: 300},
  image: {type: Types.CloudinaryImage},
  publishedDate: {type: Date, default: Date.now}
});

Book.register();