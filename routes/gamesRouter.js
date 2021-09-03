const express = require("express") 
const gamesRouter = express.Router()
const Game = require('../models/game.js')

//GET all
gamesRouter.get('/',(req,res,next)=>{
    Game.find((err, games)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(games)
    })
})

//GET one
gamesRouter.get('/:gameId', (req,res,next) =>{
    Game.findById(gameId, (err, foundGame)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(foundGame) 
    })

})

//POST new
gamesRouter.post( "/", (req, res, next)=>{
    const newGame =  new Game(req.body)
    newGame.save((err, savedGame)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedGame)
    })
})


//DELETE one by id
gamesRouter.delete("/:gameId", (req,res, next)=>{     
    Game.findOneAndDelete(
        {_id: req.params.gameId},
        (err, deletedItem)=>{   
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successully deleted ${deletedItem.title} from the list!`)
    })
}) 

//UPDATE
gamesRouter.put("/:gameId", (req,res, next)=>{
    Game.findOneAndUpdate(
        {_id: req.params.gameId},        
         req.body,        
         {new: true},    
         (err, updatedGame)=>{ 

             if(err){
                 res.status(500)
                 return next(err)
             }
              return res.status(201).send(updatedGame) 
         }
    )
})


