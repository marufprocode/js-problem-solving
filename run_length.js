// write a function that takes a string as parameter being passed and return a compressed version of the string using the run length encoding algorithm. This algorithm works by taking a occurrence of each repiting character of the repiting sequence. For example: "wwwggopp" would return "3w2g1o2p" the string will not contain any numbers, punctuations or symbols.

const runLength = (str) => {
    let result="";
    let count=1;
    str.split("").forEach((letter, index) => {
       if (str[index+1] === letter){
           count++ 
       }else{
        result += count + letter;
        count = 1
       }
    });
    return result
}

console.log(runLength("wwwggopp"))