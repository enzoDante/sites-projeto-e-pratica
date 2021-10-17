var x = 1
function add(){
    var tabela = document.getElementById("tabela")
    var jogador = document.getElementById("jogador").value
    var classe = document.getElementById("classes")
    classe = classe.options[classe.selectedIndex].textContent

    var nome = document.getElementById("nome").value 
    var nivel = parseInt(document.getElementById("nivel").value)
    
    if(jogador != "" && nome != ""){

        var novo = `<tr id="`+x+`">
        <td>`+jogador+`</td>
        <td>`+classe+`</td>
        <td>`+nome+`</td>
        <td>`+nivel+`</td>
        <td><button type="submit" class="del" onclick="deletar(this)">X</button></td>
        </tr>`
        tabela.innerHTML += novo
        //x++
        document.getElementById("jogador").value = ""
        document.getElementById("nome").value = ""
        parseInt(document.getElementById(nivel).value) = 0

    }
    else{
        alert("Complete as colunas da tabela!!!")
    }

}
function deletar(e){
    e.parentNode.parentNode.outerHTML = ""
}