// Nullish Coalescing (??)

// Exercício 1:
const nome = null;

console.log(nome ?? 'Não informado');

// Exercício 2:
const idade = null;

console.log(idade ?? 18);

// Exercício 3:

const estoque = 0;

console.log(estoque ?? 10);

// Exercício 4:

const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

// Exercício 5:

const usuario1 = {
  apelido: undefined
};

const nomeExibido = usuario1.apelido ?? "Visitante";
console.log(nomeExibido);
