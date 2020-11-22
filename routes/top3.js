const express = require('express');
const { Top3 } = require('../models');

const router = express.Router();

router.route('/')
    .get(async(req,res,next)=>{
        try{
            const top3 = await Top3.findAll();
            res.json(ntsf);
        } catch(err){
            console.error(err);
            next(err);
        }
    })
    .post(async(req,res,next)=>{
        try{
            const top3 = await Top3.create({
                books: req.body.book,
                electronics: req.body.elec,
                furnitures: req.body.furn,
                leisures: req.body.leisure,
                foods: req.body.food,
                cosmetics: req.body.cos,
                clothes: req.body.clothes,
                innerwears: req.body.inner,
                accessories: req.body.acc,
                kitchens: req.body.kit,
                bags: req.body.bas,
            });
            console.log(top3);
            res.status(201).json(top3);
        } catch(err){
            console.error(err);
            next(err);
        }
    });