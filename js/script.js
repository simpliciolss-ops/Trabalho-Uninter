document.getElementById("formContato").addEventListener("submit", function(event){

event.preventDefault();

let nome = document.getElementById("nome").value.trim();
let email = document.getElementById("email").value.trim();
let mensagem = document.getElementById("mensagem").value.trim();
let erro = document.getElementById("mensagemErro");

erro.textContent = "";

/* verificar campos vazios */

if(nome === "" || email === "" || mensagem === ""){
erro.textContent = "Por favor, preencha todos os campos.";
return;
}

/* validar formato do email */

let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailValido.test(email)){
erro.textContent = "Por favor, informe um e-mail válido.";
return;
}

/* sucesso */

alert("Mensagem enviada com sucesso!");

document.getElementById("formContato").reset();

});