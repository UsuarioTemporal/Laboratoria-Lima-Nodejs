const mult = arr=>{
    let start = 0
    let end = arr.length-1
    const recursive = (start,end,arr)=>{
        if(start===end) return arr[start]
        let middle = parseInt((start+end)/2)
        return recursive(start,middle,arr)*recursive(middle+1,end,arr)
    }
    return recursive(start,end,arr)
}
console.log(mult([1,2,3,4]))
