function bracketMatcher (str) {
    const stack = [];
    for (let i = 0; i<str.length; i++){
        if(str[i] === "("){
            stack.push(str[i])
        }else if(str[i] === ")"){
            if(stack.length === 0){
                return 0
            }else{
                stack.pop()
            }
        }
    }
    return stack.length === 0 ? 1:0;
}
// function bracketMatcher (str) {
//     let openBracket = 0;
//     let closingBracket = 0;
//     for (let i = 0; i<str.length; i++){
//         if(str[i] === "("){
//             openBracket =openBracket+1
//         }else if(str[i] === ")"){
//             closingBracket =closingBracket+1
//         }
//     }
//     return openBracket === closingBracket ? 1:0
// }

console.log(bracketMatcher("(c(oder)) b(yte)"))
