console.time('loop');

// const reduce = ([a,...b],fn,initValue)=> a ? reduce(b,fn,fn(initValue,a)):initValue
const reduce =(arr,fn,initValue)=>{
	[a,...b]=arr
  	return a ? reduce(b,fn,fn(initValue,a)):initValue
}

let value = reduce(["hola","amigos","¿","Cómo","están","?"],(accu,curr)=>accu?`${accu} - ${curr}`:`${curr}`,'')
console.log(value)
console.timeEnd('loop'); 