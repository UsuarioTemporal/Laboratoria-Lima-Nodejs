const reduce = ([a,...b],fn,initValue)=> a ? reduce(b,fn,fn(initValue,a)):initValue

let value = reduce([1,2,3],(pre,curr)=>`${pre} - ${curr}`,0)
console.log(value)