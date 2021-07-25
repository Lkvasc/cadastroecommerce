/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}
function fMascEx() {
    obj.value = masc(obj.value)
}
function mTel(tel) {
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
        tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
        tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
        tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    }
    return tel;
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

function mCEP(cep) {
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
    cep = cep.replace(/\.(\d{3})(\d)/, ".$1-$2")
    return cep
}

function mNum(num) {
    num = num.replace(/\D/g, "")
    return num
}

var clienteObject;

function store() {
    var inputEmail = document.getElementById("email");
    var inputNome = document.getElementById("nome");
    var inputCPF = document.getElementById("cpf");
    var inputTel = document.getElementById("tel");
    var inputEnd = document.getElementById("end");

    clienteObject = [{ 
        'nome': inputNome.value, 
        'cpf': inputCPF.value,
        'email': inputEmail.value,
        'tel': inputTel.value,
        'end': inputEnd.value
    }];

    localStorage.setItem('clienteObject', JSON.stringify(clienteObject));

    console.log("Dados do local storage: ", localStorage);
}


function storeProd() {
    var inputNomeProd = document.getElementById("nomeprod");
    var inputCodProd = document.getElementById("codigoprod");
    var inputPrecoProd = document.getElementById("preçoprod");
    var inputQuantidadeProd = document.getElementById("quantidadeprod");
    var inputObsProd = document.getElementById("obsprod");

    prodObject = [{ 
        'nomeProduto': inputNomeProd.value, 
        'codigoProduto': inputCodProd.value,
        'preçoProduto': inputPrecoProd.value,
        'quantidadeProduto': inputQuantidadeProd.value,
        'observaçãoProduto': inputObsProd.value
    }];

    localStorage.setItem('produtoObject', JSON.stringify(prodObject));

    console.log("Dados do local storage: ", localStorage);
}

    
    // var retrievedObject = JSON.parse(localStorage.getItem('clienteObject'));
    
    // var tbody = document.getElementById('tbody');
    
    // for (var i = 0; i < retrievedObject.length; i++) {
    //   var tr = "<tr>";
    //   tr += "<td>" + retrievedObject[i].nome + "</td></tr>";
    //   tr += "<td>" + retrievedObject[i].cpf + "</td></tr>";
    //   tr += "<td>" + retrievedObject[i].tel + "</td></tr>";
    //   tbody.innerHTML += tr;
    // }