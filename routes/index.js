var express = require('express');
var router = express.Router();
var newMessageRouter = require('./newMessage');

const messages = [
  {
    text: "Hi there!sdsfd dsfdsfdsdfs fdsdsfdsfdsffdsfdsfdssdf fdsfsdfdsfdsf",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini message board', messages: messages });
});

router.use('/new', newMessageRouter(messages));

module.exports = router;
