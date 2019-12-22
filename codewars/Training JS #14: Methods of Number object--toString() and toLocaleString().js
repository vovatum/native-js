function colorOf(r, g, b) {
    if (255 < r || r < 0 || 255 < g || g < 0 || 255 < b || b < 0) {
        return "Numbers only 0 - 255"
    } else {
        let red = r.toString(16),
            green = g.toString(16),
            blue = b.toString(16);
        if (red.length < 2) red = "0" + red;
        if (green.length < 2) green = "0" + green;
        if (blue.length < 2) blue = "0" + blue;
        return '#' + red + green + blue;
    }
}
//         let arrayNumbers = [r, g, b],
//             stringNumbers = [];
//         for (let number of arrayNumbers) {
//             if (number.toString(16).length < 2) {
//                 stringNumbers.push(0 + number.toString(16));
//             } else
//                 stringNumbers.push(number.toString(16));
//         }
//         console.log(stringNumbers.join());

console.log(colorOf(255,0,0));
console.log(colorOf(0, 111, 0));
console.log(colorOf(1, 2, 3));
// Test.assertSimilar(colorOf(255,0,0), "#ff0000");
// showColor("#ff0000")
// Test.assertSimilar(colorOf(0,111,0), "#006f00");
// showColor("#006f00")
// Test.assertSimilar(colorOf(1, 2 ,3), "#010203");
// showColor("#010203")
