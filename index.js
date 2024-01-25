const arrays = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];


const findUnion = (arrays) => {
    const unionSet = new Set()
    arrays.forEach(array => {
        array.forEach(el => {
            unionSet.add(el)
        })
    });
    return Array.from(unionSet)
}

console.log(findUnion(arrays))