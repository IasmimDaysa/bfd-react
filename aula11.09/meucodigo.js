/*
const frutaObj = {
    "nome": "laranja", //chave ou propriedade: "valor"
    "tipo": "citrica",
    "valor": 5
}

//for in (itera por chve)
for(chave in frutaObj){
    console.log(chave + " - "+ frutaObj[chave])
}

const numbers = [10,20,30,40,50]
for(const index in numbers){
    console.log(numbers[index])
}

const usuario = {
    nome: "Leticia",
    idade: 30
}


const frutas = ["banana","açai", "maça"];

frutas.forEach((fruta, index)=>{
    console.log(fruta);
    console.log(index);

});

const frutasEmMaiusculo = frutas.map((fruta)=>{ fruta.toUpperCase() });
console.log(frutasEmMaiusculo);
//frutas.forEach

function ListaFrutas() {
    const frutas = ["banana","açai","maça"];

    return (
        <ul>
            {[...frutas].sort().map((fruta, index) => (
                <li key= "{index}">{fruta}</li>
            ))}
        </ul>
    );
}

const numeros = [1,2,3,4];
//map - cada elemento dobrado
//transformar
const dobrados = numeros.map(n=> n *2)
//filtro
const pares = numeros.filter(n => n % 2 === 0)
//reduce
const soma = numeros.reduce((acumulador, n) => acumulador + n, 0)
console.log(soma)

*/

//Arrow funcion retornar o cubo de um valor

const numeros = [1,2,4,5]
//const cuboValor = n => n ** 3

const cubus = numeros.map(n => n ** 3)
console.log(cubos)














