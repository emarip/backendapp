'use strict'

let aliranKungfuController = require('./aliranKungfuController')

const aliranKungfu = function(ctx){
    const server= ctx.server
    const db = ctx.db
    const aliran = db.collection ('AliranKungfu')

    server.get('/getAliran', function(req, res){
        aliranKungfuController.getAliran(aliran, function(respon, err){
            if (err){
                throw err
            } 
            res.json(respon)
        })
    })

    server.post('/postAliran', function(req,res){
        const data = Object.assign({},req.body,{})
        aliranKungfuController.postAliran(aliran, data, function(respon, err){
            if (err){
                throw err
            }
            res.json({status : "success", message : "datam wa inserted"})
        })
    })
}


module.exports = {
    aliranKungfu : aliranKungfu
}
