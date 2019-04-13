//String de datos de nodejs
let argv = process.argv
const https= require('https'),
    options = {
        host:argv[2],
        port : 443,
        
    }

https.get(options,response=>console.log(response.statusCode))
.on('error',err=>console.log(err))
// console.log(process.argv)