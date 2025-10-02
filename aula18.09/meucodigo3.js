//GET
async function buscarUsuario(id) {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users/${id}')
        if(!res.ok){
         throw new Error(`Erro HTTP: ${res.status}`);
        }
        //console.log(res)
        const dados = await res.json();
        console.log("Nome:", dados.name)
        //console.log(dados)

    }catch(erro){
        console.error("Erro ao buscar usuarios:", erro.message)
    }
}

buscarUsuario(1);
