const btnEnviar = document.getElementById('btn-enviar');
const chex = document.getElementById('agreement');
const botao = document.getElementById('submit-btn');
const text = document.getElementById('textarea');
const form1 = document.getElementById('evaluation-form');
const form2 = document.getElementById('form-data');
botao.disabled = true;

function botaoEnviar(event) {
  event.preventDefault();
  form1.style.display = 'none';
  const nome = document.querySelector('#input-name').value;
  const sobreNome = document.querySelector('#input-lastname').value;
  const email1 = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const textarea = document.querySelector('#textarea').value;
  const obj = {
    Nome: `${nome} ${sobreNome}`,
    Email: email1,
    Casa: casa,
    Observações: textarea,
  };
  const novoElemento = document.createElement('p');
  novoElemento.innerText = `Nome: ${obj.Nome}\nEmail: ${obj.Email}
  Casa: ${obj.Casa}\nFamilia: ${obj.Familia}\nObservações: ${obj.Observações}`;
  form2.appendChild(novoElemento);
}

function enviar(event) {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#password').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function habilitar() {
  if (chex.checked === true) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

function contadorCaracteres() {
  let quantidadeInicial = 501;
  const quantidade = text.value;
  quantidadeInicial -= (quantidade.length + 1);
  document.getElementById('counter').innerText = quantidadeInicial;
}

botao.addEventListener('click', botaoEnviar);
text.addEventListener('input', contadorCaracteres);
chex.addEventListener('click', habilitar);
btnEnviar.addEventListener('click', enviar);
