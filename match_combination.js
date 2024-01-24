// Create a javascript function that takes an array of number as an arguments and return true if any of combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array. Otherwise return false. For example: id arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4+6+10+3=23. The array will not be empty or will not contain all the elements same and may contain negative numbers.

// const matchCombinationOfNumber = (numArr) => {
//   if (numArr?.length < 2) {
//     return false;
//   }
//   const largestNumber = Math.max(...numArr);
//   let combination = numArr.reduce(
//     (acc, num) => (num !== largestNumber ? acc + num : acc),
//     0
//   );
//   if (combination === largestNumber) {
//     return true;
//   } else if (combination < largestNumber) {
//     return false;
//   } else {
//     return isContains(numArr, largestNumber)
//   }
//   function isContains (arr, target){
//     console.log(arr.length)
//     if(arr.length === 0){
//         return arr.length === 0
//     }
//     const head = arr[0];
//     const tail = arr.slice(1)
//     return isContains(tail, target-head) || isContains(tail, target)
//   }
// };

function ArrayAdditionI(arr) { 

    arr.sort(function(a,b){return a - b});
    let maxNum = arr.pop();
    let total = 0;
      
    for (let i = 0; i < arr.length; i++){
      total += arr[i];
      for (let j = 0; j < arr.length; j++){
        if (i !== j) {
          total += arr[j];
          if (total === maxNum) {
            return true;
          }
        }
      }
        
      for (let k = 0; k < arr.length; k++) {
        if (i !== k) {
          total -= arr[k];
          if (total === maxNum) {
            return true;
          }
        }
      }
      total = 0;
    }
      
    return false; 
           
  }

console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3]));


// Another Solution
// const arr = [4, 6, 23, 10, 1, 2];

// let large = 0;
// let sum = 0;
// let res = false;

// arr.forEach((item, i) => {
//   if (item > arr[large]) {
//     large = i;
//   }
// });

// for (let i = 0; i < arr.length; i++) {
//   sum = arr[i];
//   for (let j = 0; j < arr.length; j++) {
//     if (j === large) {
//       continue;
//     }
//     sum += arr[j];
//     if (sum === arr[large]) {
//       res = true;
//       break;
//     }
//     if (sum > arr[large]) {
//       sum -= arr[i];
//     }
//   }
// }
// console.log(res);