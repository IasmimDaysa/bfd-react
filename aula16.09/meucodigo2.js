setLista([...lista, novoItem]); //spread operator

/*
async function carregarDados() {
    const res = await fetch("/api/users");
    const data = await res.json();
    console.log(data);
}

<button onClick={() => alert("Clicou!")}>Click</button>

onChange
onSubmit

function saudacao(nome){
    const mensagem = 'Olá, ${nome}'

    function mostrarSaudacao(){
        console.log(mensagem);
    }
    return mostrarSaudacao;
}

const olaHeitor = saudacao("Heitor");
olaHeitor();


/*ForEach(item, index, )
item: Dados/Informações contidos na posição atual da array
index: numero da posição, começa por 0
array: retorna o array completo
const users = [
{ name: "Mariana C", age: 25, tel: "71998881122", city: "Salvador"},
{ name: "João S", age: 30, tel: "+11988883344", city: "São Paulo"},
{ name: "Ana S", age: 28, tel: "+71977775566", city: "Salvador"}
];
// objeto: vazio = {}
//callback: (acc, user) => {...}

const contagem = users.reduce((acc, user)=>{
     acc[user.city] = (acc[user.city] || 0 ) +1;

   // if(!acc[user.city]){
    //    acc[user.city] = 0;
  //  }
   // acc[user.city] += 1;

    return acc;
}, {});
console.log(contagem)


const somaDasIdades = users.reduce((acc, user, index, array)=>{
    acc += user.age;
    if(index === array.length-1){
        return acc/array.length
    }
    return acc;
}, 0);

console.log(somaDasIdades)
// const mediaDasIdades = somaDasIdades / users.length;
*/
