const express = require('express'),
    app = express(),
    {processErrors,processErrorsLargeSizeBody} =  require('./lib/handleErrors'),
    {validateImages} = require('./middlewares/validateImages')

app.use(express.json()) // Content-Type: application/json
app.use(express.raw({ // Content-Type: image/png
    type:'image/*',
    limit:'1mb'
}))

app.use(processErrorsLargeSizeBody)
// se hara el verbo PUT porque en este caso la operación será idempotente
// es decir que el estado del servidor luego de realizarla será la misma
app.put('/',[validateImages],processErrors(async (req,res)=>{
    console.log(req.body);
    res.json({
        url:'blabla'
    })
}))

app.listen(1700)