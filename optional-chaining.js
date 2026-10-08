// Optional Chaining (?.)

// Exercício 1:
const aluno = {
    nome: 'Carlos',
    endereco: {
        cidade: 'São Paulo',
    },
};

console.log(aluno.endereco?.cidade);

// Exercício 2:
const usuario = {
    nome: 'Ana',
};

console.log(usuario.endereco?.rua);

// Exercício 3:
const produto = {
    nome: 'Notebook',
};

console.log(produto.fabricante?.nome);

// Exercício 4:
const cliente = {
    nome: 'João',
};

console.log(cliente.endereco?.cidade);

// Exercício 5:
const escola = {
    diretor: {
        contato: {
            email: 'diretor@escola.com',
        },
    },
};

console.log(escola.endereco?.cidade?.email);
