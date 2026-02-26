// A classe BASE (Mãe) vem primeiro
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








class JogadorFutebolAmericano{
    #listaJogadas;
   #jardasJogadas;
    constructor(listaJogadas, jardasJogadas) {
        this.#listaJogadas = listaJogadas
        this.#jardasJogadas = jardasJogadas
    }
}
exibirTouchdown(jogador){
    return `O jogador número ${this.numero} fez TouchDown ${this.nome}`
}





class JogadorBasquete{
    #alturaSalto;
    #totalCestas;
    constructor (alturaSalto, totalCestas){
        this.#alturaSalto = alturaSalto
        this.#totalCestas = totalCestas
    }
}
exibirArremesso (jogador){
    return `O jogador ${this.nome} e número ${this.numero} arremessou a bola`
}


const Jogador = new JogadorFutebolAmericano(10);
const Jogador= new JogadorBasquete(Daquila);


console.log




