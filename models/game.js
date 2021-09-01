const mongoose = require('mongoose')
const Schema = mongoose.Schema


const gameSchema = new Schema({ 
    title:{
        type: String,
        required: true
    },
    players:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
    },
    category:{
        type: String,
        enum: ['FPS','Cozy','MMORPG']
    },
    console:{
        type: String,
        enum: ['PS4','PS5','XBoxONE', 'XBoxX', 'PC','Nintendo Switch'] //could have more than one console per game-
        // one game to many consoles- data relationship
        //ref: "Console"
    },
    rating:{
        type: Number,
        required: true
    }

})

module.exports = mongoose.model("Game", gameSchema) 
