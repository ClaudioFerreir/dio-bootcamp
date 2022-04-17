function mapSemThis(arr) {
  return arr.map(function(item) {
    return item * 2;
  });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));

console.log(nums);

// const arr2 = nums.map((item) => {return item * 2}); //exemplo do uso de map dentro de uma variavel, nao esquecer do return

// console.log(arr2)
