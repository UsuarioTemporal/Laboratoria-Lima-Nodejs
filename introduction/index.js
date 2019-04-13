const fs = require('fs')
let argv = process.argv
let path = argv[2]
let extention = argv[3]
//require('path')
fs.readdir(path,(err,list)=>{
    console.log('hecho',list,path,extention);
    list.forEach(item=>{
        if(item.endsWith(`.${extention}`)){
            fs.readFile(`${path}${item}`,(err,data)=>{
                console.log(data.toString())
            })
        }
    })
})


