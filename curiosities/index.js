//imprimir muchos objetos de manera correcta
let pepe={age:14}
let juan={age:16}
let carlos={age:19}
// console.log('%c My friends','color : green;')
console.log({pepe,juan,carlos})
console.table([pepe,juan,carlos])


const pikachu = {name:'pikachu'}
const stats = {hp:40,attack:60,defense:45}

const mejorado = {...pikachu,...stats}
console.log({mejorado})