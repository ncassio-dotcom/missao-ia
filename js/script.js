import {aleatorio, nome} from'./aleatorio.js';
import {perguntas} from'./Perguntas.js';
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas =
const botaoJogarNovamente = document. querySelector(".novamente-btn");
;
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPergunta () {
if(atual >= perguntas.length){
mostrarResultado();
return;

}
perguntaAtual = perguntas [atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativa.textContent = "";
mostraAlternativa();

}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = `em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    botaoJogarNovamente.addEventListener("click", JogarNovamente()) 
}

function JogarNovamente (){
    atual = 0;
    historiaFinal = "";
    mostraPergunta();

}

function substituiNome(
    for(const pergunta of perguntas) {
        perguntas.enunciado = pergunta.enunciado.replace(/voce/g, nome);
    }
)
substituiNome();
mostraPergunta();