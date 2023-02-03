let pessoa = {nome: 'João', 
sexo: 'M', 
idade: 41, 
peso:85.4, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg.`)
pessoa.engordar(2)
console.log(`${pessoa.nome} agora pesa ${pessoa.peso}Kg.`)
