let keystone = require('keystone');
let importRoutes = keystone.importer(__dirname);

let routes = {
  views: importRoutes('./views'),
  api: importRoutes('./api')
  //next route goes here
};

console.log(routes.api)

exports = module.exports = function (app) {
  app.get('/', routes.views.index);
  app.get('/addPost', routes.views.addPost);
  app.post('/api/post', routes.api.post.index);
}