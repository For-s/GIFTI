var express = require('express');
var router = express.Router();

router.get('/main', (req, res) => {
  res.render('main', { title: 'main' });
  res.render('q1', { title: 'q1' });
});

  
module.exports = router;