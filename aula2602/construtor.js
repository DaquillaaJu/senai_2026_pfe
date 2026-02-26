class Estudante{
    nome;
    #ra;
    #cpf;
      

    constructor (nome,ra,cpf){
        this.nome = nome;
        this.#ra = ra;
        this.#cpf = cpf;
    }
}

const Julia = new Estudante("Julia Daquila", 3333333334, 90909090); //as numerações não aparecem porque são atributos privados
console.log(Julia)