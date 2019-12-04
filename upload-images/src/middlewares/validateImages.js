const fileType = require('file-type')
const CONTENT_TYPE_VERIFIED = ['image/jpeg','image/png','image/jpg'] 

exports.validateImages = (req,res,next)=>{
    let contentType = req.get('content-type')
    if(!CONTENT_TYPE_VERIFIED.includes(contentType)){
        console.log('Request para modificar la imagen no tiene content-type valido ',contentType);
        res.status(400).send(
            `Los archivos de type ${contentType} no son soportados . Usar uno de ${CONTENT_TYPE_VERIFIED.join('')}`
        )
        return
    }
    let infoBinary = fileType(req.body)
    if(!CONTENT_TYPE_VERIFIED.includes(infoBinary.mime)){
        const message = `Dispariedad entre content-type [${contentType}] y tipo de archivo [${infoBinary.ext}] request no será procesado`
        console.log(`${message}`);
        res.status(400).send(message)
        return
    }
    req.extensionsFile = infoBinary.ext
    next()
}