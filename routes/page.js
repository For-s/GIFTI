var express = require('express');
var router = express.Router();

router.get('/main', (req, res) => {
  res.render('main', { title: 'main' });
});

router.get('/q1',(req,res)=>{
    res.render('q1',{title: 'q1'});
});
  
module.exports = router;