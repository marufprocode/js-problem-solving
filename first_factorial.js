const findFirstFactorial = (num) => {
    if(num === 0 || num ===1){
        return 1
    }else{
        return num * findFirstFactorial(num-1)
    }
}

console.log(findFirstFactorial(8))
