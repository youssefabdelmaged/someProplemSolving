const largestNumber = (numbers) => {
  let LargestNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (LargestNumber < numbers[i]) {
      LargestNumber = numbers[i];
    }
  }
  return LargestNumber;
};

const numbers = [50, 60, 90, 150, 112, 22, 55];
const theLargestNumber = largestNumber(numbers);
console.log(theLargestNumber);
