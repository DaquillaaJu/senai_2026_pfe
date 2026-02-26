
   class Caneta {
    cor = 'Vermelho';
    marca = 'BIC';
    ponta = 'Fina';
    carga = 5; // Imagine que isso é a porcentagem ou ml
    tampa = true; // Geralmente a caneta começa tampada

    escrever() {
               return 'começou a escrever';
    }

    sublinhar(quantidadeGasta) {
        // A condição fica dentro do método para decidir o que fazer
        if (this.carga > quantidadeGasta) {
            this.carga -= quantidadeGasta;
            return `Sublinhado feito! Carga restante: ${this.carga}`;
        } else {
            return "Falhou: Carga insuficiente para sublinhar.";
        }
    }
}

// Criar a caneta
const canetaFina = new Caneta();

// Testando
console.log(canetaFina.escrever()); // Vai avisar da tampa       // Destampando...
console.log(canetaFina.escrever()); // Agora escreve
console.log(canetaFina.sublinhar(2)); // Gasta 2 de carga
