console.log("teste")

//Ex3: Verificar se é maior de idade
const idade = parseInt(process.argv[2]);

if (isNaN(idade)) {
  console.log("Por favor, digite uma idade válida.");
} else if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

//Ex4: Verificar se um valor está dentro de um intervalo




//Ex5: Verificar se valor é par ou impar
