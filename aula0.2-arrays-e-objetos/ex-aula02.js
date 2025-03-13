//1 – Crie um vetor contendo os nomes de todos os estados brasileiros. Em seguida, exiba esse vetor na tela através de uma estrutura forEach. Os índices do vetor também devem ser exibidos.

const estados = ["acre","alagoas","amapa","amazonas","bahia","ceara","distrito federal","espirito santo","goias","maranhão","mato grosso","mato grosso do sul","minas gerais","pará","paraiba","parana","pernambuco","piaui","rio de janeiro","rio grande do sul","rondonia","roraima","santa catarina","são paulo","sergipe","tocantins","rio grande do norte",]

console.log("As lista dos estados é");
estados.forEach((estados, i) => {
  console.log(`${i + 1} - ${estados}`);
})

//2 – Crie um objeto literal para descrever você. Esse objeto deve ter no mínimo 5 chaves, por exemplo, nome, idade, cidade, hobby, música preferida. Em seguida, exiba as chaves e valores na tela.

const Noah = [{
    nome: "Marcelo",
    idade: 19,
    cidade: "Pariquera",
    hobby: "Jogar",
    jogoFavorito: "valorant",
}];

Noah.forEach(produto =>{
    console.log(`nome: ${produto.nome}`)
    console.log(`idade: ${produto.idade}`)
    console.log(`cidade: ${produto.cidade}`)
    console.log(`hobby: ${produto.hobby}`)
    console.log(`jogo Favorito: ${produto.jogoFavorito}`)
})
//3 – Crie um array de objetos de filmes com no mínimo 5 filmes. Cada filme deve possuir no mínimo 4 chaves, por exemplo, título, gênero, ano e classificação de idade. Em seguida, exiba o array de objetos através de uma estrutura forEach.

const filme = [{
    titulo: "PaulinPinho",
    ano: 2025,
    genero: "homofobico",
    classIdade: "80",
},
{
    titulo: "Lucas Luco",
    ano: 2030,
    genero: "Ateu",
    classIdade: "100",   
}];

