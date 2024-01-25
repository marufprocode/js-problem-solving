// create a function that takes two string as parameter and return true if a portion of arg1 can be rearranged to match arg2 otherwise return false. for example: if argguments is ("rkqodlw", "world") it will return true.

const stringScramble = (str1, str2) => {
    const matcherArr = str1.split("")
    return str2.split("").every(el => {
        const findIndex = matcherArr.findIndex(i => i === el)
        console.log({findIndex})
        if(findIndex >= 0){
            matcherArr.splice(findIndex, 1)
            return true
        }
        return false
    });
}

console.log(stringScramble("rkqodllw", "worlld"))