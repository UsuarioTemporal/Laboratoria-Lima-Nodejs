const express = require('express'),
    app = express(),
    {processErrors,processErrorsLargeSizeBody} =  require('./lib/handleErrors')

app.use(express.json()) // Content-Type: application/json
app.use(express.raw({ // Content-Type: image/png
    type:'image/*',
    limit:'1mb'
}))

app.use(processErrorsLargeSizeBody)
// se hara el verbo PUT porque en este caso la operación será idempotente
// es decir que el estado del servidor luego de realizarla será la misma
app.put('/',processErrors(async (req,res)=>{
    res.json({
        url:'blabla'
    })
}))