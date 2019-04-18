// const fn = _=>{
//     let [a,...b]=[]
//     console.log(a,b)
// }
// fn()
console.time('loop')
const reduce = (arr,fn,initValue)=>{
    const recurse = (remaining,prev,indx)=>(
        (!remaining.length) ? prev : recurse(remaining.slice(1),fn(prev,remaining[0],indx,arr),indx+1)
    );
    return recurse(arr,initValue,0)
}
let value = reduce([1,2,3],(pre,curr,indx,arr)=>`${pre} - ${curr}`,0)

console.log(value)
console.timeEnd('loop')