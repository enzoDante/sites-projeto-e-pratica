function criar(){
    var adicionar = document.getElementById("ad")

    var titulo = document.getElementById("titulo").value 
    //var inpimg = document.getElementById("img") devo estudar input file!

    var texto = document.getElementById("texto").value 

    if(titulo == "" || texto == ""){
        alert("preenche os campos abaixo!!!")
    }
    else{
        adicionar.innerHTML += `<div class="aded"><h2>${titulo}</h2><br><img src="" alt=""><br><textarea name="" id="texto" cols="70" rows="15" placeholder="Notícia:" disabled>${texto}</textarea><br><button onclick="fechar(this)">Deletar</button></div>`




        document.getElementById("titulo").value = ""
        document.getElementById("texto").value = ""
    }
}

function fechar(e){
    e.parentNode.outerHTML = ""
}