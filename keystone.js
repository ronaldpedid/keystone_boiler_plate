let keystone = require('keystone');
let path = require('path');
let handlebars = require('express-handlebars');

//init keystone
keystone.init({
  'cookie secret': 'e7hyahjenm9!!asd$2',
  'name': 'keystone cms',
  'brand': 'keystone fan site',
  'user model': 'User',
  'auto update': true,
  'session': true,
  'auth': true,
  views: 'templates/views',
  'view engine': 'hbs',

  'custom engine': handlebars.create({
    layoutsDir: 'templates/views/layouts',
    partialsDir: 'templates/views/partials',
    defaultLayout: 'default',
    helpers: new require('./templates/views/helpers')(),
    extname: '.hbs'
  }).engine,
  'sass': 'public',
  'static': 'public',
  'cloudinary config': 'cloudinary://663181556596997:NfJxN9tJPomoksQjBqqa6HMSdKk@the-sage-mages'
});

//set a custom port 
keystone.set(process.env.PORT || 3000);

//setup locals.
keystone.set('locals', {
  _: require('lodash'),
  utils: keystone.utils,
  editable: keystone.content.editable
});


keystone.import('models');
keystone.set('routes', require('./routes'));
keystone.set(__dirname + 'public');
keystone.start();