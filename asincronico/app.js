const http = require('http')
let _string = ''
let argv = process.argv
const ejer1 = url =>{
    console.log(`${url} \n`)
    http.get(url,response=>{
        response.on('data',data=>_string+=data.toString())
        response.on('end',end=>console.log(_string))
    })
    _string=''
}

ejer1(argv[2])
ejer1(argv[3])
ejer1(argv[4])