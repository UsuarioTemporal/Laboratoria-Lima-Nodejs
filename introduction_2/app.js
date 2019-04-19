const {file}= require('./index')
const {dir}= require('./index_2')

const apps = async(path,extention)=>{
    const data = await dir(path)
    // console.log(data)
    let newArr = data.filter(item=>item.endsWith(extention))
    return Promise.all(newArr.map(item => file(path, item)))
}

let argv = process.argv
apps(argv[2],argv[3])
.then(console.log)
.catch(console.log)