const btnEnviar = document.getElementById('btn-enviar');
const chex = document.getElementById('agreement');
document.getElementById('submit-btn').disabled = true;

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
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}

chex.addEventListener('click', habilitar);
btnEnviar.addEventListener('click', enviar);
