//require in keystone and field types
let keystone = require('keystone');
let Types = keystone.Field.Types;

//assign a new post
let Post = new keystone.List('Post');

Post.add({
  title: { type: String, require: true, initial: true },
  author: { type: String },
  body: { type: Types.Html, wysiwyg: true },
  headerImgUrl: { type: Types.CloudinaryImage },
  published: { type: Boolean },
  publishedDate: { type: Types.Date, index: true }
});

Post.schema.virtual('canAccessKeystone').get(function () { return true });

Post.schema.pre('save', function (next) {
  let post = this;
  if (post.isModified('published') && post.published) {
    this.publishedDate = Date.now();
  }
  return next();
});

Post.defaultColumns = 'title, author, published, publishedDate';
Post.register();