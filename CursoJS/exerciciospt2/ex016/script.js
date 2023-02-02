function contar() {
    let inicio = window.document.getElementById('txtinicio')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpasso')
    let res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    }
    else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        res.innerHTML = 'Contando: <br>'

        if (p <= 0){
            p = 1
            window.alert('Passo inválido! Considerando PASSO = 1')
        }

        if (i < f) {
            // contagem crescente
            for (let cont = i; cont <= f; cont += p) {
                res.innerHTML += `${cont} \u{1F449} `
            }
        }
        else {
            // contagem regressiva
            for (let cont = i; cont >= f; cont -= p) {
                res.innerHTML += `${cont} \u{1F449} `
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}