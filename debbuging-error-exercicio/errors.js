// O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda
// ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

// Crie uma função que recebe um array e um número
function validateArray(arr, num){
  // Realize as seguintes validações
  // Utilize a declaração try...catch
  try{
  // Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
    if(!arr && !num) throw new ReferenceError("Envie os parametros");

    // Se o array não for do tipo 'object', lance um erro do tipo TypeError
    if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

    // Se o número não for do tipo 'number', lance um erro do tipo TypeError
    if(typeof num !== 'number') throw new TypeError("Esta informação precisa ser do tipo number");

    // Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
    if(arr.length !== num) throw new RangeError('Tamanho inválido!');

    return arr;
  }
  // Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
  catch(e){
    if(e instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError");
      console.log(e.message);
      // throw e;
      // console.log(e.name);
      // console.log(e.stack);

    } else if(e instanceof TypeError) {
        console.log("Este erro é um TypeError");
        console.log(e.message);
        // throw e;
        // console.log(e.name);
        // console.log(e.stack);

    } else if(e instanceof RangeError) {
      console.log("Este erro é um RangeError")
      console.log(e.message);
      // throw e;
      // console.log(e.name);
      // console.log(e.stack);
    } else{
      console.log("Tipo de erro não esperado: " + e)
    }
  }
}

console.log(validateArray([1,2,3,4,5],5))
