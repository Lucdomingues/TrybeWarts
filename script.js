const btnEnviar = document.getElementById('btn-enviar');
const chex = document.getElementById('agreement');
const botao = document.getElementById('submit-btn');
let text = document.getElementById('textarea');
botao.disabled = true;

function enviar(event) {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#password').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  console.log(senha);
  console.log(email);
}

function habilitar() {
  if (chex.checked === true) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

function contadorCaracteres() {
  let quantidadeInicial = 500;
  let quantidade = text.value;
  quantidadeInicial = quantidadeInicial - (quantidade.length + 1);
  document.getElementById('counter').innerText = quantidadeInicial;

  if (text.keyCode == 46 || text.keyCode == 8) {
    console.log('deletou');
  }
}



text.addEventListener('keypress', contadorCaracteres)
chex.addEventListener('click', habilitar);
btnEnviar.addEventListener('click', enviar);
