var trocarimagem = 0
imagemdinamica()

function imagemdinamica(){
    var bolas = document.getElementsByClassName("ponto")
    let slides = document.getElementsByClassName("imgsdinamica")
    let i = 0
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none'
    }
    trocarimagem++
    if(trocarimagem > slides.length){trocarimagem = 1}
    slides[trocarimagem-1].style.display = 'block'

    for(i = 0; i < bolas.length; i++){
        bolas[i].style.backgroundColor = '#646464'
    }
    bolas[trocarimagem-1].style.backgroundColor = 'white'
    
    setTimeout(imagemdinamica, 2000)

}