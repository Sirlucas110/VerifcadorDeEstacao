function verificar(){
    var mes = prompt('Digite o mês por extenso (ex: Agosto) ').toUpperCase()
    var img = document.getElementById('imagem')
    var msg = document.querySelector('div#res')
    var mensagem
    if (mes == 'JANEIRO' || mes == 'FEVEREIRO' || mes == 'MARÇO'){
        img.src = 'verao.png'
        document.body.style.background = '#F4A460'
        mensagem = `Verão`
    } else if (mes == 'ABRIL' || mes == 'MAIO' || mes == 'JUNHO'){
        img.src = 'outono.png'
        document.body.style.background = '#FF8C30'
        mensagem = `Outono`
    } else if (mes == 'JULHO' || mes == 'AGOSTO' || mes == 'SETEMBRO'){
        img.src = 'inverno.png'
        document.body.style.background = '#B0C4DE'
        mensagem = `Inverno`
    } else if (mes == 'OUTUBRO' || mes == 'NOVEMBRO' || mes == 'DEZEMBRO'){
        img.src = 'Primavera.png'
        document.body.style.background = '#FFB6C1'
        mensagem = `Primavera`
    }
    msg.innerHTML = `${mensagem}`
}