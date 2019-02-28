const server = require('https'),
    client = require('https'),
    options = {
        host: 'ed.team',
        port: 443,
        path: '/cursos'
    },
    httpClient = response=>{
        console.log(options.host,response.statusCode,response.statusMessage)
        response.on('data',data=>{
            htmlCode+=data
            console.log(data);
        })
    },
    httpError = err=>{
        console.log(options.host,err.code,err.statusMessage)
    },
    webServer = (request,response)=>{
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(htmlCode)
    }


let htmlCode = ''
