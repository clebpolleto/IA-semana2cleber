const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é inteligência artificial?",
        alternativas: [
            "a) Uma forma de tecnologia que imita a inteligência humana.",
            "b) Um tipo de software usado apenas em computadores superpoderosos."
        ]
    },
    {
        enunciado: "Quais são algumas aplicações comuns de inteligência artificial?",
        alternativas: [
            "Reconhecimento facial, assistentes virtuais.",
            "Aprendizado de linguagem, foguetes espaciais.."
        ]
    },
    {
        enunciado: "Qual é a diferença entre inteligência artificial fraca e forte?",
        alternativas: [
            " A inteligência artificial fraca se refere a sistemas que podem realizar tarefas específicas.",
            "A inteligência artificial fraca é usada apenas em computadores pessoais, enquanto a forte é usada em supercomputadores."
        ]
    },
    {
        enunciado: "Como os algoritmos de inteligência artificial aprendem?",
        alternativas: [
            "Através de tentativa e erro, ajustando pesos e conexões entre unidades neurais.",
            ") Através de programação estática que não pode ser alterada."
        ]
    },
    {
        enunciado: "Quais são algumas preocupações éticas em torno da inteligência artificial?",
        alternativas: [
            "Viés nos dados, privacidade e automação de empregos.",
            "Eficiência energética e desenvolvimento sustentável.."
        ]
    },
]; 
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
      
    }
}
mostraPergunta();
