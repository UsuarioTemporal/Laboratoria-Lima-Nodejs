// Implementa una función que dados dos argumentos (base y exponente) calcula
//  la potencia de la base elevada al exponente. Básicamente, nuestra función 
//  tiene que hacer lo mismo que Math.pow(), y tener un “firma” así: int 
//  potencia( int base, int exponente ). Implementar dos versiones, una 
//  iterativa y otra recursiva.

// Problema propuesto por @lupomontero

const pow =(base,expo)=>expo>1 ? pow(base,expo-1)*base : base
console.log(pow(2,5))