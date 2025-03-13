//array (vetor ou lista)
let produtos = []
console.log(typeof(produtos))
let Produtos = ["computador", "notebook", "celular", "tablet"]
console.log(Produtos)
console.log("exibindo a lista pelos indices...")

console.log(`1 - ${Produtos[0]}`)
console.log(`2 - ${Produtos[1]}`)
console.log(`3 - ${Produtos[2]}`)
console.log(`4 - ${Produtos[3]}`)

console.log("exibindo a lista através do for...")

for(let c in Produtos){
    console.log(`${Number(c)+ 1} - ${Produtos[c]}`)
}
console.log("exibindo a lista através do forEach...")
Produtos.forEach(function(Produtos){
    console.log(Produtos)
})

console.log("exibindo a lista através do forEach com os indices...")
Produtos.forEach((Produtos,i)=>{
    console.log(`${i+1} - ${Produtos}`)
})

// metodso de manipulaçãio de vetores

let vetor = ['Laranja','maça','banana']
console.log(`Nosso vetor é o: ${vetor}`)
vetor[3]= 'Morango'
console.log(`Nosso vetor agora é o: ${vetor}`)

//metodo push - insere um novo elemento no final do vetor

vetor.push('abacaxi')
console.log(`Nosso vetor é o: ${vetor}`)

// METODO UNSHIFT - insere novo elemento no inicio do vetor

vetor[0] = 'pera'
console.log(`Nosso vetor é o: ${vetor}`)
vetor.unshift('Laranja')
console.log(`Nosso vetor é o: ${vetor}`)

// METODO LENGTH - retorna o numero de elementos no vetor

let numeros = [6,8,2,9,3]
console.log(`Nossa lista de numeros é: ${numeros}`)
console.log(`O NUMERO DE ELEMENTOS DO VETOR É ${numeros.length}`)

//METODO SORT - ordernar o vetor

console.log(`o primeiro element da lista de frutas é: ${vetor}.`)
vetor.sort()
console.log(`o primeiro element da lista de frutas é: ${vetor}.`)

//ordanação de numeros com sort

console.log(`Nossa lista de numeros é ${numeros}`)
numeros.sort()
console.log(`Nossa lista de numeros é ${numeros}`)

// ordenando de forma crescente

console.log(numeros.sort((a,b) => b - a))

//////////////////////////////////////////////////////
//objetos literais (nao são derivados de classes)
//objetos possuem atributos (caracteristicas) e metodos (ações) 
//lado esquerdo: chaves/ lado direito: valores
const pessoa = {}
console.log(typeof(pessoa))