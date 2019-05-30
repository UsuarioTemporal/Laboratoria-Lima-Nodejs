const compareArrays = (arr1,arr2) =>{
    if(arr1.length !==arr2.length) return false
    const recursive = index=>(
        index===arr1.length?true:(
            arr1[index]!==arr2[index]?false:recursive(index+1)
        )
    )
    return recursive(0)
}
let objetoA = {
    name: 'Julio',
    edad: 23,
    ciudad: 'Lima'
};
 
let objetoB = {
    name: 'Julio',
    edad: 11,
    ciudad: 'Pisco'
};
 
let objetoC = {
    name: 'Julio',
    edad: 23
};
const compareObject =(obj1,obj2)=>{
    if(Object.keys(obj1).length!==Object.keys(obj2).length) return 3     
    for(let ob in obj1){
        if(obj2.ob===undefined) return 2
    }
    return 1
} 

// console.log(compareArrays(['a',09],['a',09]))
const print = console.log
// print(compareObject(objetoA,objetoB))




const spreadOperationArray =()=>{
    
}

const spreadOperationObject = ()=>{
    
}
// como unir array y objetos
// [...arr,2,...arr2]  y {name:'asd',...object}

// ycamposde@gmail.com


/**
 * 
 * @param {arr} es el array para buscar
 * @param {element} es el element que será el que comprueba
 * @return La función retornará un array de array
 * @example ([2,6,8,0,9,-10,-1]) => [[2,6] ,[8,0],[9,-1]]
 */

const checkCondition = (arr,element) =>{

    //Esto es un closure
    const recursive = arr=>{

    }
    return recursive(arr)
}

// console.log(checkCondition([2,6,8,0,9,-10,-1],8))


const fn = (acc,curr,index,arr)=>`${acc}-${curr}`
const reduce = ([a,...b],fn,initValue)=>a?reduce(b,fn,fn(initValue,a)):initValue
const map = (arr,fn)=>reduce(arr,(acc,curr)=>acc.concat(fn(curr,arr)),[])
const filter = (arr,fn)=>reduce(arr,(acc,curr)=>fn(curr)? acc.concat(curr) :acc,[])

const reduce_2 = (arr,fn,initValue)=>{
    const recursive = ([a,...b],fn,index,initValue)=>a?recursive(b,fn,index+1,fn(initValue,a,index,arr)):initValue
    return recursive(arr,fn,0,initValue)
}

const map_2 = (arr,fn)=>reduce_2(arr,(acc,curr,index,arr)=>acc.concat(fn(curr,index,arr)),[])
const filter_2 = (arr,fn)=>reduce_2(arr,(acc,curr,index,arr)=>fn(curr,index,arr)?acc.concat(curr):acc,[])

// console.log(filter([1,2,3],element=>element%2===0))
console.log(filter_2([1,2,3],element=>element%2===0))
