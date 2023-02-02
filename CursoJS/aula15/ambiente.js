//ARRAYS

let num = [5, 8, 4]

// adicionando elementos no array
num[3] = 6
num.push(7)

console.log('Vetor: ' + num)

console.log(`Tamanho do vetor: ${num.length}`)

console.log(`Vetor ordenado: ${num.sort()}`)

console.log('Vetor: ')
/*
for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem valor ${num[i]}`)
}
*/
for (let i in num) {
    console.log(num[i])
}


let pos = num.indexOf(0)
if (pos == -1){
    console.log(`O valor 8 não está no array.`)
}
else{
    console.log(`O valor 8 está na posição ${pos}.`)
}

