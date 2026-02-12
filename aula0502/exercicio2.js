const prompt= require ('prompt-sync')();
let idade=Number(prompt("Insira aqui sua idade: "));
if (idade>18) {
    console.log("Você é maior de idade")
}else if(idade<=16) {
    console.log("Você consegue pegar livros");
}
else ("Você não possui idade suficiente para pegar livros emprestados");




