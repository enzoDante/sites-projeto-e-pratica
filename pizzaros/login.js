var entra = document.getElementById("entra")
var senhau
var btnlogin

function logar(){
    btnlogin = document.getElementById("btnlogin")


    var nome = document.getElementById("usuario").value 
    senhau = document.getElementById("senha-usuario")
    var senha = senhau.value

    if(nome == '' || senha == ''){
        //adicionar o "modal" com uma tela de cadastro!
        alert("Digite nos campos abaixo!!!")
        document.getElementById("usuario").focus()
    }
    else{
        document.getElementById("usuario").value = 'Logado'
        document.getElementById("usuario").setAttribute("disabled", "true")
        document.getElementById("usuario").setAttribute("id","loga")

        var btnsair = document.createElement("button")
        btnsair.innerHTML = 'Sair'
        btnsair.setAttribute("onclick", "sair()")
        btnsair.setAttribute("id", "btnsaiu")

        document.getElementById("senha-usuario").value = ''
        entra.removeChild(senhau)
        entra.removeChild(btnlogin)
        entra.appendChild(btnsair)
    }
}

function sair(){
    
    document.getElementById("loga").value = ''
    document.getElementById("loga").removeAttribute("disabled")
    document.getElementById("loga").setAttribute("id","usuario")
    
    entra.appendChild(senhau)
    entra.appendChild(btnlogin)
    
    var s = document.getElementById("btnsaiu")
    entra.removeChild(s)
}