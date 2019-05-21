let user = require('../../models/User');
console.log(user);

module.exports = function (req, res) {
  res.render('index');
}