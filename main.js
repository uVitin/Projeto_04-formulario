const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montate de: R$ ${valorDeposito.value} foi depositado para o cliente: ${nomeBeneficiario.value} na conta: ${numeroContaBeneficiario.value}`

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'inline-block'

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.mensagem-erro').style.display = 'block';
    }
}) 

nomeBeneficiario.addEventListener('keyup', function(e) {
    formEValido = validaNome(e.target.value);

    if (!formEValido)  {
        nomeBeneficiario.classList.add('erro');
        document.querySelector('.mensagem-erro').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('erro');
        document.querySelector('.mensagem-erro').style.display = 'none';
    }

    console.log(e.target.value);
})