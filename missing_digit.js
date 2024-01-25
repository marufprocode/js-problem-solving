// Find the missing value of x

const findMissingDigit = (str) => {
    let x = 0;
    let temp = str.replace("x", x)
    let arr = temp.split("=")

    while(eval(arr[0]) !== eval(arr[1])){
        x++
        temp = str.replace("x", x)
        arr = temp.split("=")
    }
    return x;

}

console.log(findMissingDigit("4 - 2 = x"))
console.log(findMissingDigit("1x0 * 12 = 1200"))


