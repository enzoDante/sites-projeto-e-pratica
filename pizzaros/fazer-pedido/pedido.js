var carrinho = document.getElementById("carrinho")
var pizzas = document.getElementById("pizzas")

function add(){
    var pedido = document.createElement("div")
    pedido.setAttribute("class","pizza")
    
    var opcao = pizzas.selectedOptions[0] //valor selecionado
    opcao = opcao.textContent//texto do valor selecionado

    var txt = document.createElement("p")
    txt.innerHTML = `Pizza: ${opcao}`
    pedido.appendChild(txt)

    var btnfecha = document.createElement("button")
    btnfecha.innerHTML = "Remover"
    btnfecha.setAttribute("onclick", "fechar(this)")
    pedido.appendChild(btnfecha)

    carrinho.appendChild(pedido)
}

function pagar(){
    var msgpagamento = document.getElementById("finalizado")
    var itens = carrinho.children

    msgpagamento.innerHTML = ''
    msgpagamento.setAttribute("class", "vazio")

    if(itens.length == ''){
        var erro = document.createElement("p")
        erro.innerHTML = `Impossível finalizar o pedido!!!<br>Tente adicionar algo`
        msgpagamento.appendChild(erro)
    }else{

        carrinho.innerHTML = ''

        var fim = document.createElement("p")
        fim.innerHTML = `Compra finalizada!!`
        msgpagamento.appendChild(fim)
    }
    msgpagamento.setAttribute("class", "compra")
    
    setTimeout(function(){msgpagamento.setAttribute("class","vazio")
    msgpagamento.innerHTML = ''}, 2000)
    //msgpagamento.innerHTML = ''

}

function fechar(e){
    e.parentNode.outerHTML = ''
}