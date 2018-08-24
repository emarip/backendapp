'use strict'

module.exports.getAliran= function(ctx, callback){
    const aliran =ctx
    let limit = 10, 
    skip =0,
    query ={}
    delete query.skip
    delete query.limit
    
    aliran.find(query).skip(skip).limit(limit).toArray()
    .then (callback)
}

module.exports.postAliran =function(ctx, data, callback){
    const aliran =ctx
        aliran.insertOne(data)
        .then (callback)
}