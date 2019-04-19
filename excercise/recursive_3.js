// Escribe una función recursiva que dado un número entero n retorne un 
// arreglo con todos los números enteros en orden decreciente desde n a 1.
//  La firma de la función debe ser: array countdown( int n ). Ejemplos:
// a) countdown(1) retorna [1]
// b) countdown(5) retorna [5, 4, 3, 2, 1]

const countdown = number=>!number ? [] : [number].concat(countdown(number-1))
console.log(countdown(1))
console.log(countdown(5))