//---------Basico do funcionamento-------------
//document.querySelector("#robotron").addEventListener("click", console.log("Olaa"))


//---------Funções--------------

// const robotron = document.querySelector("#robotron")

// ----função não declarada, só sera executada quando o evento especifico dela for ativado--
// robotron.addEventListener("click", () => {
//     console.log("Cutucou o Robô")
// })

// ----função declarada, pode ser executada a qualquer momento que for chamada pelo seu identificador--
// function dizOla() {
//     console.log("Olaa")
//     console.log("Bem vindo ao robotron 2000")
// } 

// dizOla()


//------------Primeiras moficações no documento------------------

// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");
// const braco = document.querySelector("#braco");

// somar.addEventListener("click", () => {manipulaDados("somar")})

// subtrair.addEventListener("click", () => {manipulaDados("subtrair")})

// function manipulaDados(operacao) {
//     if(operacao === "subtrair") {
//         braco.value = parseInt(braco.value) - 1
//     } else {
//         braco.value = parseInt(braco.value) + 1
//     }
// }

//-------------modificações dinamicas-----------------------------

const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.textContent)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca, operacao) {
    estatistica.forEach ( (elemento) => {
        if(operacao === "-"){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        } else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }        
    })
}