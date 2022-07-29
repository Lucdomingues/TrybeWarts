const btnEnviar = document.getElementById('btn-enviar');
const chex = document.getElementById('agreement');
const botao = document.getElementById('submit-btn');
const text = document.getElementById('textarea');
const form1 = document.getElementById('evaluation-form');
const form2 = document.getElementById('form-data');
botao.disabled = true;
let novaVar = '';

function botaoEnviar(event) {
  event.preventDefault();
  form1.style.display = 'none';
  const nome = document.getElementById('input-name').value;
  const sobreNome = document.getElementById('input-lastname').value;
  const email1 = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const textarea = document.getElementById('textarea').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const conteudo = document.querySelectorAll('input[class="subject"]:checked');
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  for (let i = 0; i < conteudo.length; i += 1) {
    novaVar += `${conteudo[i].value}, `;
  }
  const novoElemento = document.createElement('p');
  novoElemento.innerText = `Nome: ${nome} ${sobreNome}\nEmail: ${email1}
  Casa: ${casa}\nFamília: ${familia}\nMatérias: ${novaVar}
  Avaliação: ${avaliacao}\nObservações: ${textarea}`;
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
