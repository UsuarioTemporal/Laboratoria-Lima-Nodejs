// Busqueda binarta

const binarySearch = (arr,item)=>{
    if(!arr.length) return false
    if(arr.length===1 && arr[0]!==item) return false
    if(arr.length===1 && arr[0]===item) return true
    let half = parseInt(arr.length/2)
    if(arr[half]===item) return true
    else if (arr[half]<item) return binarySearch(arr.slice(half),item)
    else return binarySearch(arr.slice(0,half),item)
}

// let v = [1,2,3]
// console.log(v.slice(1))
console.log(binarySearch([1,2,3],2))