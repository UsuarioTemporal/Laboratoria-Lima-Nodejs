const fs = require('fs')

const dir = (path)=>{
    return new Promise((resolve,reject)=>{
        fs.readdir(path,(err,list)=>{
            if(err) return reject(err)
            return resolve(list)
        })
    })
}


module.exports = {
    dir
}