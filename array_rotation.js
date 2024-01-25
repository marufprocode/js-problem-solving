const arrayRotate = (array, position) =>{
    const result = array.splice(position+1)
    return result.concat(array)
    // return [...array.slice(position+1, array.length), ...array.slice(0, position+1)]
}


console.log({arrayRotate: arrayRotate([1, 2, 3, 4, 5, 6, 7], 3)}) // Output: [5, 6, 7, 1, 2, 3, 4]

const numbers = [4, 2, 7, 2, 9, 5];

// const lowestNumber = Math.max(...numbers);
// const lowestNumber = numbers.sort()[0];

const sortAsc = numbers.sort((a, b)=> b-a)

console.log(sortAsc)

function removeDuplicateValues(obj) {
    const uniqueValues = new Set(Object.values(obj));
    const newObj = {};
  
    // for (const key in obj) {
    //   if (uniqueValues.has(obj[key])) {
    //     newObj[key] = obj[key];
    //     uniqueValues.delete(obj[key]);
    //   }
    // }
    Object.entries(obj).forEach(([key, value]) => {
      if(!newObj[key] && !Object.values(newObj).includes(value)){
        newObj[key]=obj[key]
      }
    })
  
    return newObj;
  }
  
  // Example:
  const originalObject = { a: 1, b: 2, c: 2, d: 3, e: 3, f: 4 };
  const objectWithoutDuplicates = removeDuplicateValues(originalObject);
  console.log('Object without Duplicates:', objectWithoutDuplicates);
  
  
