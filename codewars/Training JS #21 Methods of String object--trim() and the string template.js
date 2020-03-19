function fiveLine(s) {
    let sTrim = s.trim();
    let sLog = sTrim;
    let sCount = sTrim;
    let n = "\n";
    for (let i = 0; i < 4; i++) {
        sTrim = sTrim + sCount;
        sLog = sLog + n + sTrim;
    }
    return sLog;
}

console.log(fiveLine("  a"));
console.log(fiveLine("\txy \n"));
console.log(fiveLine("           Ok               "));
// Test.assertSimilar(fiveLine("  a") , "a\naa\naaa\naaaa\naaaaa");
// Test.assertSimilar(fiveLine("\txy \n") , "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
// Test.assertSimilar(fiveLine("           Ok               ") , "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");
