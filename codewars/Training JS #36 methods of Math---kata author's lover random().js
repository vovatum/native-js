function rndCode() {
    let myCode = []
    let letters = 'ABCDEFGHIJKLM'
    let symbols = '~!@#$%^&*'
    for (let i = 0; i < 2; i++) {
        myCode.push(letters[~~(letters.length * Math.random())])
    }
    for (let i = 0; i < 4; i++) {
        myCode.push(~~(10 * Math.random()))
    }
    for (let i = 0; i < 2; i++) {
        myCode.push(symbols[~~(symbols.length * Math.random())])
    }
    return myCode.join('')
}

console.log(rndCode())

// var yourcode=rndCode();
// console.log("Your Code:",yourcode);
// Test.assertSimilar(typeof yourcode,"string","The result should be string");
// Test.assertSimilar(yourcode.length,8,"The length should be 8");
// Test.assertSimilar("ABCDEFGHIJKLM".indexOf(yourcode[0])>-1,true,"1st char should generate from A-M");
// Test.assertSimilar("ABCDEFGHIJKLM".indexOf(yourcode[1])>-1,true,"2nd char should generate from A-M");
// Test.assertSimilar(/^\d{4}$/.test(yourcode.slice(2,-2)),true,"3th-6th char should be numbers");
// Test.assertSimilar("~!@#$%^&*".indexOf(yourcode[6])>-1,true,"7th char should generate from ~!@#$%^&*");
// Test.assertSimilar("~!@#$%^&*".indexOf(yourcode[7])>-1,true,"8th char should generate from ~!@#$%^&*");
