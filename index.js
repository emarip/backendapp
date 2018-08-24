'use strict'

var restify = require('restify')
var restifyPlugins = require ('restify-plugins')
var assert = require ('assert')
var mongodb = require ('mongodb')
var corsMiddlesware = require('restify-cors-middleware')

var server = restify.createServer()

const cors= corsMiddlesware({
    'origins' : ['*']
})
server.pre(cors.preflight)
server.use(cors.actual)

server.use(restifyPlugins.jsonBodyParser({mapParams:true}))
server.use(restifyPlugins.acceptParser(server.acceptable))
server.use(restifyPlugins.queryParser({mapParams:true}))
server.use(restifyPlugins.fullResponse())

let Mongo = require ('./getConnection')
let aliranKungfuRoute = require ('./aliranKungfu/aliranKungfruRoute')


Mongo.connection(function(err, respon){
    const db =respon.db('dbdesakungfu')
    aliranKungfuRoute.aliranKungfu({server, db})
})

server.listen('3005', ()=>{
    console.log ('success')
})


