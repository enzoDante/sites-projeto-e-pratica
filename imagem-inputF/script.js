var carregar = function(event){
    var img = document.getElementById("img")
    img.src = URL.createObjectURL(event.target.files[0])
}
//teste para carregar imagem na tela