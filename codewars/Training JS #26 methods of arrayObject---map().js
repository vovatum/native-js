function isolateIt(arr) {
    let marARR = arr.map(el => {
        if (el.length % 2 === 0) {
            return el.slice(0, el.length / 2) + '|' + el.slice(el.length / 2, el.length)
        } else {
            return el.slice(0, Math.floor(el.length / 2))
                + '|' +  el.slice(Math.ceil(el.length / 2), el.length)
        }
    })
    return marARR
}


console.log(isolateIt(["abcd", "efgh"]))
console.log(isolateIt(["abcde","fghij"]))
console.log(isolateIt(["1234","56789"]))
// Test.assertSimilar(isolateIt(["abcd","efgh"]) , ["ab|cd","ef|gh"]);
// Test.assertSimilar(isolateIt(["abcde","fghij"]) , ["ab|de","fg|ij"]);
// Test.assertSimilar(isolateIt(["1234","56789"]) , ["12|34","56|89"]);