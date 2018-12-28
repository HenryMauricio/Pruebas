var express = require('express');
var router = express.Router();
var user = require('../controllers').users;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users',user.list);
router.post('/users',user.add);
module.exports = router;
