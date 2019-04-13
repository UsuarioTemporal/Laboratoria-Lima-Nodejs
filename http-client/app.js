//String de datos de nodejs (investigar)
let argv = process.argv
const http= require('http')
    // options = {
    //     host:argv[2],
    //     port : 83,

    // }
//ctrl+?'
http.get(argv[2],response=>{
    response.on('data',data=>console.log(data.toString()))
    .on('error',err=>console.log(err))
})
// .on('data',data=>console.log(`Objeto ${data}`))
// console.log(process.argv)
