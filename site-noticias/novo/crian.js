function criar(){
    var diva = document.getElementById("ad")
    var titulo = document.getElementById("titulo").value
    var texto = document.getElementById("texto").value

    if(titulo == "" || texto == ""){
        alert("preencha o título e o campo abaixo!")
    }
    else{
        alert("testee")
        diva.innerHTML = "<p> deu certoooo?</p>"
    }
}