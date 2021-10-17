var carta1 = {
    nome: "carta 1",
    atributos: {
        ataque: 10,
        defesa: 10
    }
}
var carta2 = {
    nome: "carta 2",
    atributos: {
        ataque: 5,
        defesa: 10
    }
}
var carta3 = {
    nome: "carta 3",
    atributos: {
        ataque: 8,
        defesa: 2
    }
}
var carta4 = {
    nome:"carta 4",
    atributos: {
        ataque: 2,
        defesa: 8
    }
}
var carta5 = {
    nome: "carta 5",
    atributos: {
        ataque: 5,
        defesa: 5
    }
}
var carta6 = {
    nome: "carta 6",
    atributos: {
        ataque: 2,
        defesa: 5
    }
}
var carta7 = {
    nome: "carta 7",
    atributos: {
        ataque: 7,
        defesa: 3
    }
}
var carta8 = {
    nome: "carta 8",
    atributos: {
        ataque: 9,
        defesa: 1
    }
}
var carta9 = {
    nome: "carta 9",
    atributos: {
        ataque: 3,
        defesa: 7
    }
}
var carta10 = {
    nome: "carta10",
    atributos: {
        ataque: 10,
        defesa: 5
    }
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10]
var x = 0
var y = 0
function pegarCarta(){
    var div = document.getElementById("c")
    x = parseInt(Math.random()*10)
    y = parseInt(Math.random()*10)
    var inimigo = cartas[x]
    while(x == y){
        y = parseInt(Math.random()*10)
    }
    var jogador = cartas[y]
    var mostra = `<br><h2>Você</h2><div id="carta">
        <p>`+cartas[y].nome+`</p>
        <hr>
        <p>Ataque: `+cartas[y].atributos.ataque+`</p>
        <p>Defesa: `+cartas[y].atributos.defesa+`</p><hr>
    </div><br>`
    div.innerHTML = mostra
    var mostran = `<br><h2>Inimigo</h2><div id="carta">
        <p>`+cartas[x].nome+`</p>
        <hr>
        <p>Ataque: `+cartas[x].atributos.ataque+`</p>
        <p>Defesa: `+cartas[x].atributos.defesa+`</p><hr>
    </div><br>
    <button type="submit" id="btb" onclick="batalhar()">Batalhar!</button>`
    div.innerHTML += mostran
    document.getElementById("bt").disabled = true
    
}
function batalhar(){
    var div = document.getElementById("c")
    var dadoa = parseInt((Math.random()* 6) + 1)
    var dadod = parseInt((Math.random()* 6) + 1)
    var dados = `<p>Dado de ataque: `+dadoa+`</p>
                <p>Dado de defesa: `+dadod+`</p>`
    div.innerHTML += dados
    if(dadod > dadoa){
        var d = cartas[y].atributos.defesa + dadod
        var a = cartas[x].atributos.ataque + dadoa
        if(d >= a){
            var res = `<hr><p class="vd">Você ganhou!</p><p class="vd">Sua defesa: `+d+`</p>
            <p class="vd">Ataque inimigo: `+a+`</p>`
        }
        else{
            var res = `<hr><p class="vd">Você perdeu!</p><p class="vd">Sua defesa: `+d+`</p>
            <p class="vd">Ataque inimigo: `+a+`</p>`
        }
        div.innerHTML += res
    }
    else if(dadod <= dadoa){
        var d = cartas[x].atributos.defesa + dadod + (parseInt(Math.random()*4)+1)
        var a = cartas[y].atributos.ataque + dadoa + (parseInt(Math.random()*4)+1)
        if(a > d){
            var res = `<hr><p class="vd">Você ganhou!</p><p class="vd">Seu ataque: `+a+`</p>
            <p class="vd">Defesa inimigo: `+d+`</p>`
        }
        else{
            var res = `<hr><p class="vd">Você perdeu!</p><p class="vd">Seu Ataque: `+a+`</p>
            <p class="vd">Defesa inimigo: `+d+`</p>`
        }
        div.innerHTML += res
    }
    document.getElementById("btb").disabled = true
    document.getElementById("bt").disabled = false
}
var c = 1
var mos = ""
function regra(){
    var r = document.getElementById("regras")
    if(c == 1){
        mos = `<div id="rrr">
        <p id="pp">Você e seu inimigo devem <strong>pegar uma carta</strong> para batalhar,
        então, vocês devem se enfrentar por meio de <strong>rolagem de 2 dados: dados de ataque e dados de defesa</strong>.<br>
        <span id="s1">-Se o dado de defesa for maior que o dado de ataque: você soma o resultado do dado de defesa com a defesa de sua carta e soma o dado de ataque com o ataque de seu inimigo, quem tiver o maior valor ganha.</span><br>
        <span id="s2">-Se o dado de ataque for maior ou igual que o dado de defesa: você soma o dado de ataque com o ataque de sua carta e soma com o valor do dado de 4 lados, o inimigo soma o dado de defesa com sua defesa e soma com o valor do dado de 4 lados, quem tiver o maior valor ganha.</span></p><button id="fecha" type="submit" onclick="xa(this)">X</button></div><br>`

        r.innerHTML = mos
        c++
    }
    else{
        r.innerHTML = ""
        c--
    }
}
//esse procedimento n é mais necessário, tem outra forma acima!
//mas gosto dessa forma abaixo
function xa(e){
    e.parentNode.outerHTML = ""
}