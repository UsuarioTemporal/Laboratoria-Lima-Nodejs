const fs = require('fs')
const file = (path,item)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(`${path}${item}`,(err,data)=>{
            if(err) return reject(err)
            return resolve(data.toString())
        })
    })
}
module.exports = {
    file
}