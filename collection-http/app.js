const http = require('http')
let argv = process.argv

let length = 0
let _string = ''
http.get(argv[2],response=>{
    response.on('data',data=>{
        length+=data.length
        _string+=data
    })
    response.on('end',end=>{
        console.log(length)
        console.log(_string)
    })
})