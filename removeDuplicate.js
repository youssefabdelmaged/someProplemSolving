const numbers = [50, 60, 60, 60, 50, 20, 90, 100, 14];

const removeTheRepeated = (numbers) => {
  const n = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(numbers[i]) === i) {
      n.push(numbers[i]);
    }
  }
  return n;
};

const theCleanArray = removeTheRepeated(numbers);
console.log(theCleanArray);

// ////////
const newArrayWithoutRepeated = [...new Set(numbers)];
console.log(newArrayWithoutRepeated);
////////
const numbers2 = [2,2,2,3,3,3,3,4,4,44,4,4,4,4,4,5,5,5,5,5,6,6,66]
const newArrayWithoutRepeated2 = numbers2.filter((n,i) =>  {return numbers2.indexOf(n) === i})

console.log(newArrayWithoutRepeated2);
