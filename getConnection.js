'use strict'

const mongodb = require('mongodb')
const assert = require ('assert')

const connection = function(callback){
    //mongodb.connect('mongodb://@localhost:27017', callback)
    mongodb.connect('mongodb://user:bootcamp161@ds125302.mlab.com:25302/dbdesakungfu',callback)
}

module.exports = {
    connection : connection
}