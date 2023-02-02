var vetor = []
var lista = window.document.getElementById('selvetor')
var tnum = window.document.getElementById('txtnum')
var res = window.document.getElementById('res') 

function isNumero(n) {
    if(n >= 1 && n <= 100) {
        return true
    }
    else if(tnum.value.length == 0){
        return false
    }
    else {
        return false
    }
}


function inLista(n, l) {
    if (l.indexOf(n) == -1){
        return false
    }
    else {
        return true
    }
}


function adicionar() {
    res.innerHTML = ''
    let num = Number(tnum.value)

    if (inLista(num, vetor)){
        window.alert('Esse número já está na lista. Digite um número diferente!')
    }
    else if(!isNumero(num)) {
        window.alert('Valor inválido!')
    }
    else{
        vetor.push(num)

        let elemento = window.document.createElement('option')
        elemento.text = `Valor ${num} adicionado.`
        elemento.value = `v${num}`
        lista.appendChild(elemento)
    }

    tnum.value = ''
    tnum.focus()
}


function mostrarResultados() {

    if (vetor.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }
    else{
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        for (let i = 0; i < vetor.length; i++) {
            soma += vetor[i]
            if (vetor[i] > maior)
                maior = vetor[i]
            if (vetor[i] < menor)
                menor = vetor[i]      
        }
        let media = soma / vetor.length

        res.innerHTML = `<p>Ao todo, temos ${vetor.length} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}. </p>`
    }    
}
