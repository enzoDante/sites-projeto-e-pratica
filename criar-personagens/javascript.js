function criar(){
    var main = document.getElementById("main")
    var nome = document.getElementById("nome").value
    var classe = document.getElementById("classe").value
    var nivel = parseInt(document.getElementById("nivel").value)
    var descricao = document.getElementById("descricao").value
    if(nome == "" || classe == "" || nivel =="NULL" || descricao == ""){
        alert("Preencha todos os campos!")
    }
    else{
        var ficha = "<div class='criacao'><label for='nome'>Nome do personagem:</label><p>"+nome+"</p><br><label for='classe'>Classe do personagem:</label><p>"+classe+"</p><br><label for='nivel'>Nível:</label><p>"+nivel+"</p><br><textarea name='descricao' disabled id='descricao' cols='70' rows='10' disabled>"+descricao+"</textarea></div>"

        main.innerHTML = main.innerHTML + ficha
}

}

/*
var ficha = "<div><label for='nome'>Nome do personagem:</label><input type='text' disabled name='nome' id='nome'><br><label for='classe'>Classe do personagem:</label><input type='text' disabled name='classe' id='classe'><br><label for='nivel'>Nível:</label><input type='number' disabled name='nivel' id='nivel'><br><textarea name='descricao' disabled id='descricao' cols='70' rows='10' disabled></textarea><div><br>"
 */