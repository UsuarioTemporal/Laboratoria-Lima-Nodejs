const traslate = sentence =>{
    let words_1 = sentence.split(' ')
    let words_2 = words_1.map(letter=>{
        letter=letter.toLowerCase().split('').reverse()
        letter[0]=letter[0].toUpperCase()
        return letter.join('')
    })
    return words_2.reverse().join(' ')
}
console.log(traslate('Hello World'))