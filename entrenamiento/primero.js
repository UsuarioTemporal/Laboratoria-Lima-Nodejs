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
print(compareObject(objetoA,objetoB))




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
    const recursive = (arr)=>{}
}

console.log(checkCondition([],))