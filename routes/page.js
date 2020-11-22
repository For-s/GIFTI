var express = require('express');
var router = express.Router();

router.get('/main', (req, res) => {
  res.render('main', { title: 'main' });
});
//get('여기가 보여지는 url')
router.get('/q1',(req,res)=>{
    //render('여기가 실제 html파일')
    res.render('q1',{title: 'q1'});
});
router.get('/q2',(req,res)=>{
    res.render('q2',{title: 'q2'});
});
module.exports = router;