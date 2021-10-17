function addE(){
    var main = document.getElementById("main")
    var n = `
    <div class="novo">
        <p>Adicionado</p>
        <button onclick="fechar(this)">fechar</button>
    </div>`
    main.innerHTML += n
    
}
function fechar(e){
    e.parentNode.outerHTML = ""
}