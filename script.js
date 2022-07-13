const btnEnviar = document.getElementById('btn-enviar');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');

let texto = email.value;
let text = senha.value;

console.log(texto);
function enviar() {
    
    if (texto ==='tryber@teste.com' && text == 123456) {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
}

btnEnviar.addEventListener('click', enviar);
