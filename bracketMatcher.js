function bracketMatcher (str) {
    let openBracket = 0;
    let closingBracket = 0;
    for (let i = 0; i<str.length; i++){
        if(str[i] === "("){
            openBracket =openBracket+1
        }else if(str[i] === ")"){
            closingBracket =closingBracket+1
        }
    }
    return openBracket === closingBracket ? 1:0
}

console.log(bracketMatcher("(c(oder)) b(yte)"))
