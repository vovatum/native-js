//не рабочая модель

// function splitAndMerge(str, sp) {
//     let words = str.split(" ");
//     let splitAndMerge = "";
//     for (let word of words) {
//         splitAndMerge = splitAndMerge.concat(word.split("").join(sp));
//     }
//     return splitAndMerge.join(" ")
// }
//
// }


// а тут схитрил, не сумев полноценно воспользоваться предложенными методами

function splitAndMerge(str, sp) {
    let words = str.split(" ");
    let splitAndMerge = words[0].split("").join(sp);
    for (let i = 1; i < words.length; i++) {
        splitAndMerge = splitAndMerge + " " + (words[i].split("").join(sp));
    }
    return splitAndMerge
}


console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("My name is John", "-"));
console.log(splitAndMerge("Hello World!", "."));
console.log(splitAndMerge("Hello World!", ","));

// splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
// splitAndMerge("My name is John","-") should return "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!",".") should return "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"
