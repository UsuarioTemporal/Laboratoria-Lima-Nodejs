// Busqueda binarta

const binarySearch = (arr,item)=>{
    if(!arr.length) return false
    if(arr.length===1 && arr[0]!==item) return false
    if(arr.length===1 && arr[0]===item) return true
    let middle = parseInt(arr.length/2)
    if(arr[middle]===item) return true
    else if (arr[middle]<item) return binarySearch(arr.slice(middle),item)
    else return binarySearch(arr.slice(0,middle),item)
}

// let v = [1,2,3]
// console.log(v.slice(1))
console.log(binarySearch([1,2,3],2))