// 7. shuffling array
const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.sort(() => Math.random() - 0.5));

function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }

console.log(chunkArray(numbers, 4))