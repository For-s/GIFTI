const express = require('express');
const Ntsf = require('../models/ntsf');

const router = express.Router();

router.route('/')
    .get(async(req,res,next)=>{
        try{
            const ntsf = await Ntsf.findAll();
            res.json(ntsf);
        } catch(err){
            console.error(err);
            next(err);
        }
    })
    .post(async(req,res,next)=>{
        try{
            const ntsf = await Ntsf.create({
                ntsf: req.body.ntsf,
                n: req.body.n,
                t: req.body.t,
                s: req.body.s,
                f: req.body.f,
            });
            console.log(ntsf);
            res.status(201).json(ntsf);
        } catch(err){
            console.error(err);
            next(err);
        }
    })
    .post(async(req,res,next)=>{
        var updateData = [
            req.body.n];
        var sql = 'UPDATE gifti.ntsf SET n = n+1 WHERE id=1';
        db.query(sql, updateData, function (err, results) {
            if(err)
                console.log(err);
            console.log(results);
        });
        res.redirect('/ntsf');
    });

module.exports = router;