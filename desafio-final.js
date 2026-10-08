// Desafio Final

const usuario6 = {
    nome: '',
    idade: 0,
    endereco: null,
};

console.log(usuario6.nome || 'Visitante');

const usuario1 = {
    nome: '',
    idade: 0,
    endereco: null,
};
console.log(usuario1.nome ?? 'Visitante');

const usuario2 = {
    nome: '',
    idade: 0,
    endereco: null,
};
console.log(usuario2.idade || 18);

const usuario3 = {
    nome: '',
    idade: 0,
    endereco: null,
};
console.log(usuario3.idade ?? 18);

const usuario4 = {
    nome: '',
    idade: 0,
    endereco: null,
};
console.log(usuario4.endereco?.cidade);

const usuario5 = {
    nome: '',
    idade: 0,
    endereco: null,
};
console.log(usuario5.endereco?.cidade ?? 'Sem cidade');
