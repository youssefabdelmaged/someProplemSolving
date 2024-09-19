const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumber1 = numbers.filter((number) => number % 2 == 0);
console.log(evenNumber1);


const evenNumberFun = (numbers) => {
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
};

const EvenNumber2 = evenNumberFun(numbers)
console.log(EvenNumber2);
