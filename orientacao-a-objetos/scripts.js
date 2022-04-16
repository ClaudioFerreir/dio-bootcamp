// Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo; //quando tem um get e set colocamos um _ na frente, para ter o get e set e nao a propriedade
  }

  // Dentro de ContaBancaria, construa o getter e o setter de saldo;
  get saldo(){
    return this._saldo;
  }

  set saldo(valor){
    this._saldo = valor;
  }
}
// Dentro de ContaBancaria, crie os métodos sacar e depositar;
// Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
// Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
// Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
// Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
// Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
// Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
