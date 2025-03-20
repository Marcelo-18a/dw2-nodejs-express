// Classe base Heroi  
class Heroi {  
    constructor(nome, vida, velocidade, forca) {  
        this.nome = nome;  
        this.vida = vida;  
        this.velocidade = velocidade;  
        this.forca = forca;  
    }  

    correr() {  
        return `${this.nome} está correndo.`;  
    }  

    andar() {  
        return `${this.nome} está andando.`;  
    }  

    atacar() {  
        return `${this.nome} está atacando.`;  
    }  

    defender() {  
        return `${this.nome} está se defendendo.`;  
    }  
}  
const homemAranha = new Heroi("Peter","85","75","80")

homemAranha.teia = " pshhhhh 'Soltando a teia'"
homemAranha.sentido = "inimigo perto"

console.log(`Oque o Homem Aranha está fazendo ${homemAranha.correr()} e  ${homemAranha.atacar()} 
CUIDADO ELE VAI LAÇAR AS TEIAS ${homemAranha.teia}. ${homemAranha.sentido} na direita`)

const superMan = new Heroi("craque","100","100","100")

superMan.podeVoar  = "Voando"
superMan.visaoCalor = "visão de calor ZION"

console.log(`Oque o superman está fazendo ${superMan.podeVoar} e usando ${superMan.visaoCalor}`)

const batman = new Heroi("craque","100","100","100")

batman.esconder  = "escondido"
batman.investigar = "investigando"

console.log(`Oque o superman está fazendo está ${batman.esconder} e tbm está ${batman.investigar}`)



/// exercicio2

const mostrarDataFutura = () => {  
    const hoje = new Date();  
    
    
    hoje.setDate(hoje.getDate() + 3);  
    hoje.setMonth(hoje.getMonth() + 2);  
    hoje.setFullYear(hoje.getFullYear() + 1);  
    
     
    const dia = String(hoje.getDate());  
    const mes = String(hoje.getMonth() + 1); 
    const ano = hoje.getFullYear();  
    
    console.log(`${dia}/${mes}/${ano}`);  
};  
 
mostrarDataFutura();  

function converterSalario(salarioEmReais) {  

    const taxaDolar = 0.176;  
    const taxaEuro = 0.16;  


    const salarioEmDolares = salarioEmReais * taxaDolar;  
    const salarioEmEuros = salarioEmReais * taxaEuro;  

    const salarioFormatadoDolar = dolarFormat(salarioEmDolares);  
    const salarioFormatadoEuro = euroFormat(salarioEmEuros);  

    return {  
        dolar: salarioFormatadoDolar,  
        euro: salarioFormatadoEuro  
    };  
}  

function dolarFormat(valor) {  
    return valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' });  
}  

function euroFormat(valor) {  
    return valor.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });  
}  

const salario = 2000.00; 
const resultado = converterSalario(salario);  
console.log(`Salário em Dólares: ${resultado.dolar}`);  
console.log(`Salário em Euros: ${resultado.euro}`);  




function formatarNome(nome) {  
    const nomeMaiusculo = nome.toUpperCase();
    const nomeMinusculo = nome.toLowerCase(); 
    const numeroDeLetras = nome.length;

    console.log("Nome em maiúsculas: " + nomeMaiusculo);  
    console.log("Nome em minúsculas: " + nomeMinusculo);  
    console.log("Número de letras: " + numeroDeLetras);  
}  


formatarNome("João Silva");  


