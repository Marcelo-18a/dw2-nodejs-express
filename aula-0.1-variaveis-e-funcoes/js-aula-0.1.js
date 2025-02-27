//comentario em js
/*Comentario em bloco... */
// declaração de variaveis no js
// COSNT X LET X VAR
const nome = "Marcelo";
let Nome;
//const nome = "pedro" -> resulta em erro pq ja tem uma const
//let Nome -> resulata em erro por ja ter uma variavel em let com o nome "Nome"
var cor = "azul";
var cor = "amarelo";
let cidade = "pariquera-açu";
const message = "hello world!! Iniciando estudos com java script!";

console.log(nome, message, cidade, cor);
//typeof (esse comando exibira o tipo da variavel)
const estado = "SP";
const idade = 18;
let endereco;

console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);
// o JavaScript é uma linguagem de tipagem dinâmica e tipagem fraca.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//tipo de funçoes do JavaScript

function minhaFuncao() {}
console.log(typeof minhaFuncao);

//funçao simples

function saudacao() {
  console.log("Olá, seja bem-vindo!!!");
}
saudacao();

//funcao com parâmetros / argumento
//parâmetro -> é um dado que a funcao recebe.
//argumento -> é o dado que é enviado para a função

function Saudacao(nome) {
  //parâmetro
  console.log("Olá, bem-vindo!! " + nome); //concatenando
  //usando template string
  console.log(`Olá, bem-vindo ao inferno!!! ${nome}`);
  //${} placeholder
}
Saudacao("Marcelo"); // Argumento

//funcao com mais de um paramentro

function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois numeros foi ${resultado}`);
}
let n1 = 6;
let n2 = 7;
soma(n1, n2);

// funcao com retorno

function Soma(n1, n2) {
  return n1 + n2;
}
console.log(`A soma dos dois numeros foi ${Soma(2, 6)}`);

//funcão com mais de um retorno
function parImpar(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
let num = 3;
console.log(`${parImpar(num)}`);
console.log(`o Numero ${num} é ${parImpar(num)}`);

//funcao anonima

let dobro = function (x) {
  return x * 2;
};
console.log(`o Dobro do numero é ${dobro(30)}!`); // (shift + at + f)

// arrow function com paramentros uncio

const Dobro = (x) => {
  return x * 2;
};
console.log(`sla poha ${Dobro(3)}`);

// arrow funcion co mais de um parametro
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
console.log(`O resultado da operaçao é ${calc(6, "**", 23)}`);

//Simplifaicando arrow function

const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`);
console.log(`O resultado da operaçao é ${Calc(6, "**", 23)}`);

// IIFE - immediately invoked function expression
// função imediata - ultima \o/
const iife = (function () {
  console.log("estou sendo executado imediatamente.....");
})();
const start = (function (app) {
  console.log(`estou sendo executado imediatamente o app ${app}`);
})("whatsapp");

// git add . 
// git commit -m "Marcelo-18a"
// git push