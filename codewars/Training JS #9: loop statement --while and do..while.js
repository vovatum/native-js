function padIt(str, n) {
    let i = 1, m = "*"; // 0 не правильно
    while (i <= n) {
        if (i % 2 === 1) str = m + str;
        else str = str + m;
        i++;
    }
    return str;
}

console.log(padIt("e", 65));
