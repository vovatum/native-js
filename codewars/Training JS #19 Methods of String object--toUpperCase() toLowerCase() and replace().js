function alienLanguage(str) {
    let words = str.toUpperCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        // words[i] = words[i].replace(words[i][words[i].length - 1], words[i][words[i].length - 1].toLowerCase());
        // не работает, так как это регулярное выражение строка. Находит и заменяет первое нахождение симовола.
        words[i] = words[i].slice(0, words[i].length - 1) + words[i].slice(-1).toLowerCase();
    }
    return words.join(" ");
}

console.log(alienLanguage("this is an example"));