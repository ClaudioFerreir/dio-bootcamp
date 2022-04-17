const lista = [
  {
    name: 'sabão em pó',
    preco: 30,
  },
  {
    name: 'cereal',
    preco: 40,
  },
  {
    name: 'toalha',
    preco: 30,
  },
];

const saldoDisponivel = 100;

function  calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function(prev, current, index) {
    console.log('rodada', index + 1);
    console.log({prev});
    console.log({current});
    return prev - current.preco;
  }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista))
