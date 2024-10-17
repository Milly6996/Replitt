//LOCALIZAR ELEMENTOS DO HTML
//CRIAR: EMAIL / TELEFONE / IDADE / SEXO
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const idade = document.getElementById('idade');
const sexo = document.getElementById('sexo');

//CRIAR VARIAVEIS
const novoNome = "Mary"
const novoSobrenome = "Jussara"
const novoEmail = "ebaaa@email"
const novoTelefone = "982572816"
const novaIdade = "99"
const novoSexo = "machismo"


//ATRIBUIR VALORES AO HTML COM OS VALORES DAS NOSSAS VARIAVEIS (innerText/innerHTML)
nome.innerText = novoNome
sobrenome.innerText = novoSobrenome 
email.innerText = novoEmail 
telefone.innerText = novoTelefone
idade.innerText = novaIdade
sexo.innerText = novoSexo