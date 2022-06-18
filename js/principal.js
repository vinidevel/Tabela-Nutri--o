//Como utilizar o console é algo bastante corriqueiro, podemos nos aproveitar dos atalhos CTRL + SHIFT + J (Win/Linux) ou CMD + ALT + J (Google Chrome no Mac. No Safari, o atalho é CONTROL + ALT + C, com o menu "Develop" ativado) para ter acesso ao console de modo rápido. Ou, atalho para inspecionar é F12

const titulo = document.querySelector(".titulo");
titulo.text = "Aparecida Nutricionista";

const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;
    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;
    const tdImc = paciente.querySelector(".info-imc");
    

    let pesoEhValido = true;
    let alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido"); //classList.add busca a classe utlizada no CSS para que a alteração de estilo ocorra lá e não no Javascript.
        //paciente.style.backgroundColor = "lightcoral"
    } else if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        console.log("Informações válidas.");
        const imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

}

titulo.addEventListener("click", function () {
    console.log("Funcao Anonima"); // addEventListener é um escutador de evento para o evento de click. Em seguida com uma função eu insiro o evento que quero que ocorra.
});

let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); //Previne o comportamento padrão de recarregar do botão, que é de recarregar a página.
    const form = document.querySelector(" #form-adiciona");

    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;
    let imcAdicionado = peso / (altura* altura)

    let pacienteTr = document.createElement("tr");
    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td"); //createElement leva todas as informações para o navegador.

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imcAdicionado.toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});