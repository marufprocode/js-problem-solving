// create a function that takes a string as parameter and search for all the numbers in the string and add them together, then return the final number divided by the total amount of letters in the string. For example: if "str" is "Hello6 9world 2, nic8e D7ay" the output should be two. First you should add up all the numbers 6+9+2+8+7=32 then there are 17 letters in the string. 32/17=1.88 so the final answer should be nearest whole number 2.

const searchNumber = (str) => {
  const lettersArr = [];
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[A-Za-z]/.test(str[i])) {
      lettersArr.push(str[i]);
    } else if (!isNaN(parseFloat(str[i]))) {
      total += parseFloat(str[i]);
    }
  }
  return Math.round(total / lettersArr.length);
};

console.log(searchNumber("Hello6 9world 2, nic8e D7ay"));
