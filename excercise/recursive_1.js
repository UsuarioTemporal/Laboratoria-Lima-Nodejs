/* Como lo dice el maestro @LupoMontero (twitter) la recursividad no es una cosa
    es una caracteristica de una cosa

    https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727
*/

/**
 * Implementa una función que retorne un string con todas las letras del alfabeto.
 */

// forma recursiva
const alfb = ()=>{
    const fn_ = (acc,curr)=>acc ? `${acc} , ${String.fromCharCode(curr)}`:`${String.fromCharCode(curr)} `
    const recursive = (ascii,initValue,fn)=>{
        return ascii<=122?recursive(ascii+1,fn(initValue,ascii),fn) : initValue
    }
    return recursive(97,'',fn_)
}
console.log(alfb())