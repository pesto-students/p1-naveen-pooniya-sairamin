function isVowel(char){
    return "aeiou".includes(char);
}
function vowelCount(string){
    const vowelMap = new Map();
    for(let char of string){
        let lowCaseChar = char.toLowerCase();
        if(isVowel(lowCaseChar)){
            if(vowelMap.has(lowCaseChar)){
                vowelMap.set(lowCaseChar,vowelMap.get(lowCaseChar)+1);
            }else{
                vowelMap.set(lowCaseChar,1);
            }
        }
    }
    return vowelMap;
}
let a = vowelCount("The parrots flew and sat under the old tree");
console.log(a.entries());