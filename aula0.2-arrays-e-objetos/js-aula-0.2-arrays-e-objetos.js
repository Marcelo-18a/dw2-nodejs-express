//array (vetor ou lista)
let produtos = [];
console.log(typeof produtos);
let Produtos = ["computador", "notebook", "celular", "tablet"];
console.log(Produtos);
console.log("exibindo a lista pelos indices...");

console.log(`1 - ${Produtos[0]}`);
console.log(`2 - ${Produtos[1]}`);
console.log(`3 - ${Produtos[2]}`);
console.log(`4 - ${Produtos[3]}`);

console.log("exibindo a lista através do for...");

for (let c in Produtos) {
  console.log(`${Number(c) + 1} - ${Produtos[c]}`);
}
console.log("exibindo a lista através do forEach...");
Produtos.forEach(function (Produtos) {
  console.log(Produtos);
});

console.log("exibindo a lista através do forEach com os indices...");
Produtos.forEach((Produtos, i) => {
  console.log(`${i + 1} - ${Produtos}`);
});

// metodso de manipulaçãio de vetores

let vetor = ["Laranja", "maça", "banana"];
console.log(`Nosso vetor é o: ${vetor}`);
vetor[3] = "Morango";
console.log(`Nosso vetor agora é o: ${vetor}`);

//metodo push - insere um novo elemento no final do vetor

vetor.push("abacaxi");
console.log(`Nosso vetor é o: ${vetor}`);

// METODO UNSHIFT - insere novo elemento no inicio do vetor

vetor[0] = "pera";
console.log(`Nosso vetor é o: ${vetor}`);
vetor.unshift("Laranja");
console.log(`Nosso vetor é o: ${vetor}`);

// METODO LENGTH - retorna o numero de elementos no vetor

let numeros = [6, 8, 2, 9, 3];
console.log(`Nossa lista de numeros é: ${numeros}`);
console.log(`O NUMERO DE ELEMENTOS DO VETOR É ${numeros.length}`);

//METODO SORT - ordernar o vetor

console.log(`o primeiro element da lista de frutas é: ${vetor}.`);
vetor.sort();
console.log(`o primeiro element da lista de frutas é: ${vetor}.`);

//ordanação de numeros com sort

console.log(`Nossa lista de numeros é ${numeros}`);
numeros.sort();
console.log(`Nossa lista de numeros é ${numeros}`);

// ordenando de forma crescente

console.log(numeros.sort((a, b) => b - a));

//////////////////////////////////////////////////////
//objetos literais (nao são derivados de classes)
//objetos possuem atributos (caracteristicas) e metodos (ações)
//lado esquerdo: chaves/ lado direito: valores
const pessoa = {};
console.log(typeof pessoa);

vetor = [];
//iterar : percorrer o vetor
lista = ["pc", "celular", "tablet"];

const carro = {
  modelo: "gol",
  cor: "vermelho",
  acelerar() {
    console.log("Acelerando...");
  },
  frear() {
    console.log("Freando");
  },
};
console.log(`o modelo do carro é  ${carro.modelo}.`);
console.log(`a cor do carro é  ${carro.cor}.`);
carro.acelerar();
carro.frear();
///////////////////////////////////
const produto = {
  nome: "computador",
  marca: "lenovo",
  preço: 3000,
  descrição: "pc modelo com bom desempenho",
};
console.log(produto)
console.log(`O ${produto.nome} da marca ${produto.marca} custa apenas R$${produto.preço}. ${produto.descrição}`)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//array de objetos

const listaProdutos = [{
    nome:"computador",
    marca:"samsung",
    preço: 2000,
    descrição:"Ótima velocidade de processamento",
},
{
    nome:"celular",
    marca:"iphone",
    preço: 16000,
    descrição:"Ótima velocidade de processamento",
},
{nome:"PS5",
    marca:"sla",
    preço: 5000,
    descrição:"Ótima velocidade de processamento",
}];
//exibindo o array de objetos com ForEach:
listaProdutos.forEach(produto =>{
    console.log(`produto: ${produto.nome}`)
    console.log(`marca: ${produto.nome}`)
    console.log(`preço: ${produto.nome}`)
    console.log(`descrição: ${produto.nome}`
 )
 console.log()
})

//console.teble
console.table(listaProdutos)
