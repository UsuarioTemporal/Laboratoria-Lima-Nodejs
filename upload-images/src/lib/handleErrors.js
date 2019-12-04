const mongoose = require('mongoose')

const processErrors = fn => (req,res,next)=>{
    fn(rq,res,next)
        .catch(next)
}

const processErrorsDB = (err,req,res,next)=>{
    if(err instanceof mongoose.Error || err.name === 'MongoError'){
        console.log('Error ',err);
        err.message = 'error en la base de datos'
        err.status = 500
    }
    next(err)
}

const errorsProduction = (err,req,res,next)=>{
    res.status(err.status || 500)
    res.send({
        message:err.message
    })
}
const errorsDevelopment = (err,req,res,next)=>{
    res.status(err.status || 500)
    res.send({
        message:err.message,
        stack:err.stack || ''
    })
}

const processErrorsLargeSizeBody = (err.req,res,next)=>{
    if(err.status === 413){
        console.log(req,path, ' excedio el limite');
    }
    next(err)
}

module.exports = {
    processErrors,
    processErrorsDB,
    errorsProduction,
    errorsDevelopment,
    processErrorsLargeSizeBody
}