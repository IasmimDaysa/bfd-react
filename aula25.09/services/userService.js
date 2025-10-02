export async function fetchUsers() {
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok) throw new Error('Erro ao buscar os users') // Verifica se a resposta é válida
    return await response.json(); // Converte a resposta para JSON e retorna
   } catch(error){
      console.error(error); // Mostra o erro no console
      return[];  // Retorna array vazio em caso de falha
   } 
}