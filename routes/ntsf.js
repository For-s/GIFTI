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
    });

module.exports = router;