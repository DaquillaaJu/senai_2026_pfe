 1. A classe BASE (Mãe) vem primeiro
class Piloto {
    #nome;
    #numero;

    constructor(nome, numero) {
        this.#nome = nome;
        this.#numero = numero;
    }

    treino_livre() {
        return '2 vezes na semana';
    }

    // Métodos para permitir que as filhas acessem os dados privados
    getNome() {
        return this.#nome;
    }

    getNumero() {
        return this.#numero;
    }
}

// 2. A classe ESPECÍFICA (Filha) herda da Piloto
class PilotoF1 extends Piloto {
    #pilotodominante;
    #totalvoltas;

    constructor(pilotodominante, totalvoltas, nome, numero) {
        // O super() SEMPRE deve ser a primeira linha do constructor da filha
        super(nome, numero);
        this.#pilotodominante = pilotodominante;
        this.#totalvoltas = totalvoltas;
    }

    ultrapassar() {
        return 'Tome ultrapassagem, bebê!';
    }

    quantidadevoltas(voltastotais) {
        return this.#totalvoltas += voltastotais;
    }

    mostrar() {
        // Usamos super.getNome() para pegar os dados da classe mãe
        return `O piloto ${super.getNome()}, número ${super.getNumero()}, status dominante: ${this.#pilotodominante}, tem um total de ${this.#totalvoltas} voltas.`;
    }
}

// 3. Instanciando e testando
const meuPiloto = new PilotoF1('Não', 81, 'Oscar Piastri', 81);
meuPiloto.quantidadevoltas(60);

console.log(meuPiloto.mostrar());





