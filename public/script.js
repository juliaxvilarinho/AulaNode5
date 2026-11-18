const campoNumero = document.getElementById('campoNumero');
const btnCalcular = document.getElementById('btnCalcular');
const textoResultado = document.getElementById('textoResultado');

btnCalcular.addEventListener('click', async () => {
    const valorDigitado = campoNumero.value;

    //1 Faz a requisição GET enviando o valor pela Query String
    const resposta = await fetch (`/dobro?valor=${valorDigitado}`) //wait so funciona na função async
    //2 Converter a resposta JSON enviada pelo express com o js
    const dados = await resposta.json();

    //Mostra resultado na tela
    textoResultado.textContent = `O dobro de ${dados.numeroEnviado} é ${dados.dobro}`
})