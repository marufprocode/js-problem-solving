const arrays = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];


const findUnion = (arrays) => {
    const unionSet = new Set()
    // arrays.forEach(array => {
    //     array.forEach(el => {
    //         unionSet.add(el)
    //     })
    // });
    arrays.flat(Infinity).forEach(el => {
        unionSet.add(el)
    })
    return Array.from(unionSet)
}

console.log({union:findUnion(arrays)})

const array2 = [2, 4, 1, 0, 9, 4, 1];

console.log(Array.from(new Set(array2)))
