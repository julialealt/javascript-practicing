function gerarTabuada() {
    var tnum = window.document.getElementById('txtnum')
    var tab = window.document.getElementById('seltab')


    if (tnum.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }
    else{

        var num = Number(tnum.value)
        var mult = 1
        tab.innerHTML = ''

        for (let i = 1; i <= 10; i++) {
            mult = num * i
            var item = window.document.createElement('option')
            item.text = `${num} x ${i} = ${mult}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }    
}