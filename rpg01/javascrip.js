function addplayer(){
    var tabela = document.getElementById("tabela")

    var jogador = document.getElementById("jogador").value 
    var classe = document.getElementById("classe")
    classe = classe.options[classe.selectedIndex].textContent
    var nome = document.getElementById("nome").value 
    var lvl = parseInt(document.getElementById("nivel").value)


    var pjo = document.getElementById("pj")
    var pn = document.getElementById("pn")
    var pl = document.getElementById("pl")
    if(lvl < 0 || isNaN(lvl)){
        var l = `Digite o Lvl!`
        pl.innerHTML = l
    }
    else{
        pl.innerHTML = ""
    }
    if(nome == ""){
        var n = `Digite o nome do personagem!`
        pn.innerHTML = n
    }
    else{
        pn.innerHTML = ""
    }
    if(jogador == ""){
        var joga = `Digite o seu nome!`
        pjo.innerHTML = joga
    }
    else{
        pjo.innerHTML = ""
    }
    if(lvl >= 0 && jogador != "" && nome != ""){
        pl.innerHTML = ""
        pn.innerHTML = ""
        pjo.innerHTML = ""

        var add = `<tr>
        <td>`+jogador+`</td>
        <td>`+classe+`</td>
        <td>`+nome+`</td>
        <td>`+lvl+`</td>
        <td><button type="submit" onclick="fechar(this)" id="btnx">X</button></td>
        </tr>`
        tabela.innerHTML += add

        var jogador = document.getElementById("jogador").value = ""
        var nome = document.getElementById("nome").value = ""
        var lvl = document.getElementById("nivel").value = 0
    }
}
function fechar(e){
    e.parentNode.parentNode.outerHTML = ""
}