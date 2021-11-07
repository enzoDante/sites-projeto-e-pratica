var entra = document.getElementById("entra")

function logar(){
    var btnlogin = document.getElementById("btnlogin")


    var nome = document.getElementById("usuario").value 
    var senhau = document.getElementById("senha-usuario")
    var senha = senhau.value

    if(nome == '' || senha == ''){
        //adicionar o "modal" com uma tela de cadastro!
        alert("Digite nos campos abaixo!!!")
        document.getElementById("usuario").focus()
    }
    else{
        document.getElementById("usuario").value = 'Logado'
        document.getElementById("usuario").setAttribute("disabled", "true")

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
    
    document.getElementById("usuario").value = ''
    document.getElementById("usuario").removeAttribute("disabled")
    
    var sen = document.createElement("input","password")
    sen.setAttribute("placeholder","Senha:")
    sen.setAttribute("id","senha-usuario")
    entra.appendChild(sen)

    var botaologin = document.createElement("button")
    botaologin.setAttribute("onclick", "logar()")
    botaologin.setAttribute("id", "btnlogin")
    botaologin.innerHTML = 'Login'
    entra.appendChild(botaologin)
    
    var s = document.getElementById("btnsaiu")
    entra.removeChild(s)
}