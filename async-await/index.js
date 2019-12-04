const express = require('express'),
    app = express(),
    fetch = require('node-fetch')
const request = require('request-promise-native')

app.set('port',process.env.PORT || 1700)
app.set('views','./views')
app.set('view engine','pug')

const getDataForPage = async ()=>{
    const pics = ['1084','1080','1075','1082','1083','1078']
    const responsesPromises = []
    let response
    for(let picId of pics){
        // response = await fetch(`https://picsum.photos/1000/1000/?image=${picId}`)
        responsePromise = request.get({
            uri:`https://picsum.photos/500/500/?image=${picId}`,
            encoding:null,
            resolveWithFullResponse:true
        })
        responsesPromises.push(responsePromise)
    }
    const responses = await Promise.all(responsesPromises)
    let images = []
    for(let res of responses){
        images.push(`data:${res.headers["content-type"]};base64,${res.body.toString('base64')}`)
    }
    return images
}

app.get('/',async (req,res)=>{
    const imagesData = await getDataForPage()
    res.render('index',{
        title:'hey',
        imagesData
    })
})

app.listen(app.get('port'))