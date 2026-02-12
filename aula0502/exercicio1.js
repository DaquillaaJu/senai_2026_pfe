const prompt = require('prompt-sync') ();
let pontuacao = Number(prompt('Digite aqui a pontuação do aluno'));
let divisao = pontuacao / 2;
console.log(divisao);
let potenciacao = divisao ** 2;
console.log("A pontuação final do aluno foi: ", potenciacao);
