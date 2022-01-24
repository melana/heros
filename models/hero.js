let mongoose = require('mongoose');

// Hero Schema
const Hero = mongoose.model('Hero', {
    nickname: {
        type: String,
        required:true
    }, 
    real_name: {
        type:String,
        required:true
    },
    origin_description: {
        type:String,
        required:true
    },
    superpowers: {
        type:String,
        required:true
    },
    catch_phrase: {
        type:String,
        required:true
    }

});

module.exports = {Hero}