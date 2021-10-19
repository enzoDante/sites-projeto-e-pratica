var x = 1
function adicionar(){
    var tabela = document.getElementById("tabela")
    var nome = document.getElementById("nome").value
    var diga = document.getElementById("algo").value

    if(diga != ""){
        if(nome == ""){
            nome = "Anonymous"
        }
        var add = `<div class="ele" id="`+x+`">
        <p>`+nome+`</p>
        <textarea id="algo" cols="50" rows="5" disabled>`+diga+`</textarea>  
        <button id="fechar" onclick="remover(this)">X</button>  
        </div>`

        //x++... parece q nn precisa disso, q bom :)
        tabela.innerHTML += add
        document.getElementById("nome").value = ""
        document.getElementById("algo").value = ""
        document.getElementById("algo").placeholder = "Diga alguma coisa"
    }
    else{
        document.getElementById("algo").placeholder = "Digite alguma coisaa!!!"
    }

}
function remover(e){
    e.parentNode.outerHTML = ""
}
