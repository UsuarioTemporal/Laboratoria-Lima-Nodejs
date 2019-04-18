const sum = number=>number+1
const double = number=>number*2
const triple = number=>number*3

const _pipe = (f,g)=>(...args)=>g(f(...args))
const pipe = (...functs)=>functs.reduce(_pipe)

const functMixt = pipe(double,sum,triple)
const result = functMixt(3)
console.log(result)