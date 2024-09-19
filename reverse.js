const text1 = "Youssef";
const array1 = text1.split("");
console.log(array1);

const reversedText = (text) => {
  let reversed = "";
  for (let i = 0; i < text.length; i++) {
    reversed = text[i] + reversed;
  }
  return reversed;
};

const theReversedText = reversedText(text1);
console.log(theReversedText);

// ////////////////////////////////

const text2 = "MEGA";
const array2 = text2.split("");
console.log(array2);

const reversedText2 = (text) => {
  let reversed = "";
  for (const character of text) {
    reversed = character + reversed;
  }
  return reversed;
};

const theReversedText2 = reversedText(text2);
console.log(theReversedText2);
