// Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0; //quando tem um get e set colocamos um _ na frente, para ter o get e set e nao a propriedade
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
}
// Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;

class ContaCorrente extends ContaBancaria{
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero)
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

class ContaPoupanca extends ContaBancaria{
  constructor(agencia, numero, tipo){
    super(agencia, numero, tipo);
    this.tipo = 'poupança';
  }
}
// Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;

class ContaUniversitaria extends ContaBancaria{
  constructor(agencia, numero, tipo){
    super(agencia, numero, tipo)
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
