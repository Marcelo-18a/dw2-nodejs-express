//1 – Crie um vetor contendo os nomes de todos os estados brasileiros. Em seguida, exiba esse vetor na tela através de uma estrutura forEach. Os índices do vetor também devem ser exibidos.

const estados = [
  "acre",
  "alagoas",
  "amapa",
  "amazonas",
  "bahia",
  "ceara",
  "distrito federal",
  "espirito santo",
  "goias",
  "maranhão",
  "mato grosso",
  "mato grosso do sul",
  "minas gerais",
  "pará",
  "paraiba",
  "parana",
  "pernambuco",
  "piaui",
  "rio de janeiro",
  "rio grande do sul",
  "rondonia",
  "roraima",
  "santa catarina",
  "são paulo",
  "sergipe",
  "tocantins",
  "rio grande do norte",
];

console.log("As lista dos estados é");
estados.forEach((estados, i) => {
  console.log(`${i + 1} - ${estados}`);
});
console.log("\n");

//2 – Crie um objeto literal para descrever você. Esse objeto deve ter no mínimo 5 chaves, por exemplo, nome, idade, cidade, hobby, música preferida. Em seguida, exiba as chaves e valores na tela.

const Noah = [
  {
    nome: "Marcelo",
    idade: 19,
    cidade: "Pariquera",
    hobby: "Jogar",
    jogoFavorito: "valorant",
  },
];

Noah.forEach((produto) => {
  console.log(`nome: ${produto.nome}`);
  console.log(`idade: ${produto.idade}`);
  console.log(`cidade: ${produto.cidade}`);
  console.log(`hobby: ${produto.hobby}`);
  console.log(`jogo Favorito: ${produto.jogoFavorito}`);
});
//3 – Crie um array de objetos de filmes com no mínimo 5 filmes. Cada filme deve possuir no mínimo 4 chaves, por exemplo, título, gênero, ano e classificação de idade. Em seguida, exiba o array de objetos através de uma estrutura forEach.

const filme = [
  {
    titulo: "Oppenheimer",
    ano: 2023,
    genero: " Drama / Histórico",
    classIdade: "16 anos",
  },
  {
    titulo: "John Wick 4: Baba Yaga",
    ano: 2023,
    genero: "Ação / Suspense",
    classIdade: "16 anos",
  },
  {
    titulo: "Elementos",
    ano: 2023,
    genero: "Animação / Aventura",
    classIdade: "Livre",
  },
  {
    titulo: "Pânico VI",
    ano: 2023,
    genero: "Terror / Suspense",
    classIdade: "18 anos",
  },
  {
    titulo: "Duna: Parte Dois",
    ano: 2024,
    genero: "Ficção científica / Aventura",
    classIdade: "14 anos",
  },
];
console.log("\n");
filme.forEach((produto) => {
  console.log(`Nome do Filme: ${produto.titulo}`);
  console.log(`Ano de lançamento: ${produto.ano}`);
  console.log(`genero do filme: ${produto.genero}`);
  console.log(`Classificação de idade: ${produto.classIdade}`);
  console.log();
});
