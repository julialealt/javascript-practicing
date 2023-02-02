

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 16
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        window.document.body.style.background = '#3098e7'
    }
    else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        window.document.body.style.background = '#a67274'
    }
    else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#0a2025'
    }
}
