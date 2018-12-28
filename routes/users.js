var express = require('express');
var router = express.Router();
var user = require('../controllers').users;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users',user.list);
router.post('/user',user.add);

module.exports = router;
