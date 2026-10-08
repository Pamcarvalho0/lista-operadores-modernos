// Misturando os conceitos

// Exercício 1:

const usuario = {
    perfil: {
        nome: 'Maria',
    },
};

const nome = usuario.perfil?.nome ?? 'Sem nome';
console.log(nome);


// Exercício 2:

const usuario1 = {};
    endereco: undefined;

const nomeExibido = usuario1.endereco ?? 'Cidade não informada';
console.log(nomeExibido);

// Exercício 3:

const aluno = {
    nota: 0,
};

console.log(aluno.nota || 10);
console.log(aluno.nota ?? 10);

// Exercício 4:

const usuario3 = {};
    endereco: undefined;

const cidade = usuario3.endereco ?? 'Não informada';
console.log(cidade);

// Exercício 5:

const pedido = {
    cliente: {
        nome: 'Pedro',
    },
};

const telefone = pedido.telefone ?? 'Telefone não informado';
console.log(telefone);
