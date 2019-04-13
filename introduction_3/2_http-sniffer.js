const server = require('http'),
    client = require('https'),
    hostname = 'localhost',
    port=3000,
    options = {
        host: 'ed.team',
        port: 443,
        path: '/cursos'
    },
    httpClient = response=>{
        console.log(options.host,response.statusCode,response.statusMessage)
        response.on('data',data=>{
            htmlCode+=data
            console.log(data.toString());
        })
    },
    httpError = err=>{
        console.log(options.host,err.code,err.statusMessage)
    },
    webServer = (request,response)=>{
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html')
        response.end(htmlCode)
    }


let htmlCode = ''

// instanciando cliente de HTTP

client.get(options,httpClient)
.on('error',httpError)

// levantando el servidor
server.createServer(webServer)
.listen(port,hostname,()=>console.log('Server'))