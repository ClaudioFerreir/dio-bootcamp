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

  // Dentro de ContaBancaria, crie os métodos sacar e depositar;
  sacar(valor){
    if (valor > this._saldo){
      return "Operação negada"
    }

    this._saldo = this._saldo - valor;

    return this._saldo;
}

  depositar(valor){
    this._saldo = this._saldo + valor;

    return this._saldo;
  }

// Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;

class ContaCorrente{
  constructor(agencia, numero, saldo, cartaoCredito) {
    super(agencia, numero, saldo)
    // Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
    this.tipo = 'corrente';
    this._cartaoCredito = cartaoCredito;
  }

  // Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
  get cartaoCredito() {
    return this._cartaoCredito
  }

  set cartaoCredito(valor) {
    return this._cartaoCredito = valor;
  }

}

// Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;

class ContaPoupanca{
  constructor(agencia, numero, tipo, saldo){
    super(agencia, numero, tipo, saldo);
    this.tipo = 'poupanca';
  }
}
// Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;

class ContaUniversitaria{
  constructor(agencia, numero, tipo, saldo){
    super(agencia, numero, tipo, saldo)
    this.tipo = 'universitária'
  }

  sacar(valor){
    // Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
    if(valor > 500) {
      return "Operação negada"
    }

    this._saldo = this._saldo - valor;

    return this._saldo;
  }
}
