 let listaDeNumerosSorteados =  [];
// Gera um número aleatório ao iniciar o jogo
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto); // Exibe o número secreto no console (apenas para teste)
let tentativas = 1; // Contador de tentativas do jogador

// Função para exibir um texto em uma tag específica (h1, p, etc.)
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Seleciona a tag no HTML
    campo.innerHTML = texto; // Coloca o texto desejado dentro da tag
    reponsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});

}

// Função que exibe as mensagens iniciais do jogo
function mensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto"); // Exibe o título do jogo
    exibirTextoNaTela("p", "Escolha um número de 1 a 1000"); // Mensagem inicial
}

// Chama a função que mostra a mensagem inicial do jogo
mensagemInicial();

// Função chamada quando o jogador faz um chute
function verificarChute(){
    // Pega o valor que o jogador digitou no input
    let chute = document.querySelector("input").value;

    // Verifica se o chute é igual ao número secreto
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Parabéns, você acertou!"); // Exibe mensagem de acerto

        // Define a palavra "tentativa" ou "tentativas" corretamente
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        // Monta a mensagem com o número de tentativas
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativas); // Exibe a mensagem

        // Habilita o botão de reiniciar
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        // Se o chute estiver errado, avisa o jogador
        exibirTextoNaTela("h1", "Você errou, tente novamente.");

        // Informa se o número secreto é maior ou menor
        if (chute > numeroSecreto){
            exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);
        }
        // Incrementa o número de tentativas
        tentativas++;
        // Limpa o campo do input para o próximo chute
        limparcampo();
    }
}

// Função que gera um número aleatório entre 1 e 1000
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 1000 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
    
    if (quantidadeDeElementosNaLista=50){
        listaDeNumerosSorteados=    {}
    } 

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
    }

}

// Função que limpa o campo de input
function limparcampo(){
    let chute = document.querySelector("input"); // Seleciona o campo de input
    chute.value = ""; // Limpa o valor digitado
}

// Função que reinicia o jogo
function reiniciarjogo(){
    numeroSecreto = gerarNumeroAleatorio(); // Gera um novo número secreto
    limparcampo(); // Limpa o campo de input
    tentativas = 1; // Reseta o contador de tentativas
    mensagemInicial(); // Mostra as mensagens iniciais novamente
    // Desabilita o botão de reiniciar até acertar novamente
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
