var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('form', {title: "Mini message board"})
});

module.exports = function(messages) {
  
  router.post('/', function(req, res) {
    messages.unshift({user: req.body.user, text: req.body.text, added: new Date()});
    res.redirect('/')
  });

  return router;
};
