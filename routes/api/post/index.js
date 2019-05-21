let keystone = require('keystone');
let Post = keystone.list('Post');

module.exports = function (req, res) {
  if (!req.body.title || !req.body.body || !req.body.author) {
    return res.sendError('Incomplete Data Set.');
  }

  let newPost = new Post.model();

  Post.updateItem(newPost, req.body, function (error) {
    res.locals.enquirySubmitted = true;
    if (error) {
      console.log(error);
      res.locals.saveError = true;
      res.render('addEvent');
    }
  });

};
