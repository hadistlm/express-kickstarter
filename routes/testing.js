var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contents/welcome', { 
  	view 	: 'welcome',
  	message	: 'Ini Halaman View',
  	user	: {
  		name  	: 'Hadist',
  		email 	: 'hadist.m',
  		website	: 'Engga ada'
  	} 
  });
});

module.exports = router;
