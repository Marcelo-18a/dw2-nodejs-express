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
