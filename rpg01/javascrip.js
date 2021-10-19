var corFundo = 1
function darkmode(){
    if(corFundo == 1){
        document.body.style.backgroundColor = "#595959"
        document.getElementById("mainfundo").style.backgroundColor = "#242424"
        document.getElementById("mainfundo").style.borderColor = "white"
        document.getElementById("mainfundo").style.color = "white"

        corFundo++
    }else{
        document.body.style.backgroundColor = "white"
        document.getElementById("mainfundo").style.backgroundColor = "white"
        document.getElementById("mainfundo").style.borderColor = "black"
        document.getElementById("mainfundo").style.color = "black"
        corFundo--
    }
}


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
        document.getElementById("pl").style.backgroundColor = "yellow"
    }
    else{
        pl.innerHTML = ""
        if(document.getElementById("mainfundo").style.borderColor == "white"){
            document.getElementById("pl").style.backgroundColor = "#242424"
        }
        else{
            document.getElementById("pl").style.backgroundColor = "#ffffff"
        }

    }
    if(nome == ""){
        var n = `Digite o nome do personagem!`
        pn.innerHTML = n
        document.getElementById("pn").style.backgroundColor = "yellow"
    }
    else{
        pn.innerHTML = ""
        if(document.getElementById("mainfundo").style.borderColor == "white"){
            document.getElementById("pn").style.backgroundColor = "#242424"
        }
        else{
            document.getElementById("pn").style.backgroundColor = "#ffffff"
        }
    }
    if(jogador == ""){
        var joga = `Digite o seu nome!`
        pjo.innerHTML = joga
        document.getElementById("pj").style.backgroundColor = "yellow"
    }
    else{
        pjo.innerHTML = ""
        if(document.getElementById("mainfundo").style.borderColor == "white"){
            document.getElementById("pj").style.backgroundColor = "#242424"
        }
        else{
            document.getElementById("pj").style.backgroundColor = "#ffffff"
        }
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