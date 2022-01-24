const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { Hero } = require('../models/hero');

// Get All Heros
router.get('/api/heros', (req, res) => {
    Hero.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// Get Single Hero
router.get('/api/heros/:id', (req, res) => {
    Hero.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});

// Save Hero
router.post('/api/heros/add', (req, res) => {
    const hero = new Hero({
        nickname: req.body.nickname,
        real_name: req.body.real_name,
        origin_description: req.body.origin_description,
        superpowers: req.body.superpowers,
        catch_phrase: req.body.catch_phrase,
    });
    hero.save((err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Hero Added Successfully', addHero: data})
        } else {
           console.log(err);
        }
    });
});

// Update Hero
router.put('/api/heros/edit/:id', (req, res) => {
    const hero = {
        nickname: req.body.nickname,
        real_name: req.body.real_name,
        origin_description: req.body.origin_description,
        superpowers: req.body.superpowers,
        catch_phrase: req.body.catch_phrase,
    };
    Hero.findByIdAndUpdate(req.params.id, { $set: hero }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Hero Updated Successfully', updateHero: data})
        } else {
            console.log(err);
        }
    });
});

// Delete Hero
router.delete('/api/heros/:id', (req, res) => {
    Hero.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Hero deleted', deleteHero: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;