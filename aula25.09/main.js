import { fetchPosts } from "./services/postService.js";
import { fetchUsers } from "./services/userService.js";

//IIFE - Imediately Inovoked Function Expression
(async () => {
    try{
        //Requisições em paralelo
        const [posts, users] = await Promise.all([
            fetchPosts(),
            fetchUsers()
        ]);
        //Race
       /* const firstResult = await Promise.race([
            fetchPosts(),
            fetchUsers()
        ]);
        if(Array.isArray(firstResult) && firstResult[0]?.userId !== undefined){
            //fetchPosts venceu a corrida
        }*/
        console.log("Total de posts:", posts.length);
        console.log("Total de users:", users.length);

        //O primeiro autor de um post
        const firstResultAuthor = 
        users.find(user => user.id === posts[0]?.userId)?.name ?? 'Autor desconhecido'
        //Nullish coalescing --> ??
        console.log("Autor:", firstResultAuthor);
    } catch(error){
        console.error("Erro:", error)
    }
})();