let listaNumeros = [];
let limiteNumeros = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;



function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 })

}

function mensagemInicial() {
    textoNaTela('h1', 'Jogo do Número Secreto');
    textoNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();


function verificarEscolha() {
    let escolha = document.querySelector('input').value;

    if (escolha == numeroSecreto) {
        textoNaTela('h1', '"Para Béns"! 🎉');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o Número Secreto com ${tentativas} ${palavraTentativa}!`;
        textoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (escolha > numeroSecreto) {
            textoNaTela('p', ' O Número Secreto é menor.');

        } else {
            textoNaTela('p', ' O Número Secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
};

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteNumeros + 1);
    let qtdLista = listaNumeros.length;

    if (qtdLista == limiteNumeros) {
        listaNumeros = [];
    }
    if (listaNumeros.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaNumeros.push(numeroEscolhido);
        console.log(listaNumeros);
        return numeroEscolhido;
    }
}

function limparCampo() {
    escolha = document.querySelector('input');
    escolha.value = '';
}

function novoJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)

}