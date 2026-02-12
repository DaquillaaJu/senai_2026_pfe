const prompt= require('prompt-sync')();
let numero=Number(prompt('Digite aqui qualquer número: '));
let numeroAleatorio=Math.random;
console.log(numeroAleatorio);
if (numero === numeroAleatorio) {
    console.log("Os números apresentados são idênticos");
} else if (numero !== numeroAleatorio) {
    console.log("Os números apresentados são diferentes");
};