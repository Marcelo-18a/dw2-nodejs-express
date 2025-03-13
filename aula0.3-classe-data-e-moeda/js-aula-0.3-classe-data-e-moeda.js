//classes no javascript
class Carro {
  //atributo
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //metodos
  buzinar() {
    return "Beep! Beep!";
  }
}

//criando uma instancia (objetos) da classe carro
const carroPopular = new Carro ("Fiat","Uno","2012")

console.log (`O carro ${carroPopular.marca} é do modelo ${carroPopular.modelo} que foi lançado em ${carroPopular.ano} e ele tem uma buzina muito forte olha!, ${carroPopular.buzinar()}`)

console.log()

const carroEsportivo = new Carro()
carroEsportivo.modelo = "Chevrolet"
carroEsportivo.marca = "Camaro"
carroEsportivo.ano = "2024"
console.log (`O carro ${carroEsportivo.marca} é do modelo ${carroEsportivo.modelo} que foi lançado em ${carroEsportivo.ano} e ele tem uma buzina muito forte olha!, ${carroEsportivo.buzinar()}`)

//adicionndo um novo atributo
carroEsportivo.corNeon = "Azul"
//adicionndo um novo atributo
carroEsportivo.turbo = function(){
    return "Vrummmm! O carro está acelerando!!!"
}

console.log()

console.log (`O carro ${carroEsportivo.marca} é do modelo ${carroEsportivo.modelo} que foi lançado em ${carroEsportivo.ano} e ele tem um motor muito forte olha!, ${carroEsportivo.turbo()} e a cor dele do ${carroEsportivo.marca} é ${carroEsportivo.corNeon}. Mas cuidade a buzina dele pode te infartar ${carroEsportivo.buzinar()}`)