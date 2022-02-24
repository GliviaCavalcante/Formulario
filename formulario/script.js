function pegarDados(){
    
    let row = document.querySelector('hr'); 
    row.classList.add('show'); 

	let result = document.querySelector('.hide'); 
    result.classList.remove('hide'); 
    result.classList.add('show');

    let camText = document.getElementById("texto").value;
    document.getElementById("camText").innerHTML = ("Nome:" + camText);
    let camTel = document.getElementById("fone").value;
    document.getElementById("camTel").innerHTML = ("Telefone:" + camTel);
    let camEmail = document.getElementById("e-mail").value;
    document.getElementById("camE-mail").innerHTML = ("E-mail:" + camEmail);
    let camSenha = document.getElementById("senha").value;
    document.getElementById("camSenha").innerHTML = ("senha:" + camSenha);

    let PriFaixa = document.getElementById("PriFaixa").value;
    document.getElementById("prifaixa").innerHTML = ("Valor da 1ª faixa:" + PriFaixa);

    let checkbox_info = document.getElementById("info");
    let checkbox_adm = document.getElementById("adm");
    let checkbox_enf = document.getElementById("enf");

    if(checkbox_info.checked){
        document.getElementById("campoInfo").innerHTML = ("Seu curso é: Informática")
    }if(checkbox_adm.checked){
        document.getElementById("campoAdm").innerHTML = ("Seu curso é: Administração")
    }if(checkbox_enf.checked){
        document.getElementById("campoEnf").innerHTML = ("Seu curso é: Enfermagem")
    }


    if(document.getElementById("info2").checked){
        document.getElementById("camRadio").innerHTML = ("Seu curso é: Informática");
    }else if(document.getElementById("adm2").checked){
        document.getElementById("camRadio").innerHTML = ("Seu curso é: Administração");
    }else if(document.getElementById("enf2").checked){
        document.getElementById("camRadio").innerHTML = ("Seu curso é: Enfermagem");
    }

    let ocult = document.getElementById("oculto").value;
    document.getElementById("campoOculto").innerHTML = ("Valor oculto: " + ocult);
    let number = document.getElementById("num").value;
    document.getElementById("campoNum").innerHTML = ("Campo do Tipo Number: " + number);
    let data = document.getElementById("data").value;
    document.getElementById("campoData").innerHTML = ("Campo de Data: " + data);    
    let hora = document.getElementById("hora").value;
    document.getElementById("campoHora").innerHTML = ("Campo de Hora: " + hora);    

    let range = document.getElementById("range").value;
    document.getElementById("camporange").innerHTML = ("Valor Hange/Range: " + range);    
}
