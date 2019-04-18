const reduce = (arr,fn,initValue)=>{
    let [a,...b] = arr
    return a ? reduce(b,fn,fn(initValue,a)) : initValue
}
console.log(reduce([1,2,3],(pre,curr)=>`${pre}- ${curr}`,0));

// repaso : El operador de propagacion permite que una expresion sea expandida en situaciones donde se esperan multiples argumentos 

const fn = (...arr )=>{
    // console.log(param)
}
fn (...[1122,2])

function fn2 (...arr){
    console.log(...arguments); // esta variable arguments solo funciona para funciones con la palabra reservada FUNCTION
}
fn2(1,2)
