// const http = require('http'),
//     options = {
//         host: 'ed.team',
//         port: 80,
//         path: '/cursos'
//     }
// http.get(options, response => console.log(response.statusCode, response.statusMessage))
//     .on('error', err => console.log(err.message))


const https = require('https'),
    options = {
        host: 'ed.team',
        port: 443,
        path: '/cursos'
    }
https.get(options, response => console.log(response.statusCode, response.statusMessage))
    .on('error', err => console.log(err.message))