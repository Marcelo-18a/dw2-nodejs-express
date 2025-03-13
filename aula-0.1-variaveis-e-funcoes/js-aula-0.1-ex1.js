function ex1() {
  console.log("Meu nome é Marcelo");
  console.log("tenho 19 anos");
  console.log("Sou de pariquera-açu");
}
ex1();

function ex2(n1, n2) {
  let divisao = n1 / n2;
  console.log("O resultado da divisão foi...." + divisao);
}
ex2(6, 2);

function ex3(n1, n2, n3) {
  return n1 * n2 * n3;
}
console.log(`o resultado é ${ex3(3, 3, 3)}`);

function ex4(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
console.log(`você é ${ex4(55)}`);

let ex5 = function (n1, n2) {
  let media = (n1 + n2) / 2;
  if (media <= 5) {
    return "reprovado";
  } else {
    return "aprovado";
  }
};
console.log(`você ${ex5(3, 8)}`);

let ex6 = (n1) => {
  let triplo = n1 * 3;
  console.log("O triplo do numero é..." + triplo);
};
ex6(4);

let ex7 = (n1, n2, n3, n4) => {
  let Somma = n1 + n2 + n3 + n4;
  console.log(`O resulatdo é ${Somma}`);
};
ex7(2, 2, 2, 1);

const ex8 = (function (nome) {
  console.log(`saudação  ${nome} você está bem?`);
})("Marcelo");
