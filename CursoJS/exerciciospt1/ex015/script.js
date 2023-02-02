function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var tano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (tano.value == '' || Number(tano.value) > ano || Number(tano.value) < 0){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }
    else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(tano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 4) {
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if (idade >= 4 && idade < 10) {
                img.setAttribute('src', 'foto-crianca-m.png')
            }
            else if (idade >= 10 && idade < 24) {
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if (idade >= 24 && idade < 55) {
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }

        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                img.setAttribute('src', 'foto-bebe-f.png')
            }
            else if (idade >= 4 && idade < 10) {
                img.setAttribute('src', 'foto-crianca-f.png')
            }
            else if (idade >= 10 && idade < 24) {
                img.setAttribute('src', 'foto-jovem-f.png')
            }
            else if (idade >= 24 && idade < 55) {
                img.setAttribute('src', 'foto-adulto-f.png')
            }
            else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}