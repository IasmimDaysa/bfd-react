import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [likes, setLikes] = useState(0);
  const [input, setInput] = useState("");
  const [ultimaHora, setUltimaHora] = useState("");

  function darLike() {  
    setLikes(prevLikes => prevLikes + 1)
    setUltimaHora(new Date().toLocaleTimeString())
    console.log(likes);
  }

  function resetar() { 
    setLikes(0);
    setInput("");
    setUltimaHora("");
  }
  // Efeito colateral
  useEffect(() => {
    document.title = `Digitado: ${input} - Likes ${likes}`;
  }, [input, likes]
  );

  return (
    <>
      <div>Numero de caractéries</div>
      <input type="text" value= {input} placeholder='Digite algo...'
      onChange={e => setInput(e.target.value)}/>
      <div style={{ color: likes >= 4 ? 'red' : 'black' }}>Likes: {likes}</div>
      <button onClick={darLike} disabled={likes >= 4}>
         {likes >= 4 ? "Limite esgotado" : "Clicar"}
      </button>
      <button onClick={resetar} style={{ marginLeft: '10px' }}>Resetar</button>

      {likes >= 4 && <p>Você atingiu o limite!</p>}
      <p>Ultimo clique: {ultimaHora || "nenhum ainda"} </p>
    </>
  );
}

export default App
