const { LocalStorage } = require('node-localstorage')
const localStorage = new LocalStorage('./dados')

async function carregadorDados() {
    try {
        const [posts, comments, users] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        ]);

       localStorage.setItem('posts', JSON.stringify(posts))
       localStorage.setItem('comments', JSON.stringify(comments))
       localStorage.setItem('users', JSON.stringify(users))

       const postsSalvo = JSON.parse(localStorage.getItem('posts'));
       postsObjSalvo.forEach(posts => {
       console.log(posts.title)
       });

       console.log(posts, comments, users);
    }   catch(erro){
        console.error('Erro ao carregar dados: ', erro);
    }
}
carregadorDados();