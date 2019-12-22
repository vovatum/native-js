function whatNumberIsIt(n) {
    switch (true) {
        case n > 1.7976931348623157e+308 || n === 1 / 0:
            return "Input number is Number.POSITIVE_INFINITY";
        case n < -1.7976931348623157e+308:
            return "Input number is Number.NEGATIVE_INFINITY";
        case n === 1.7976931348623157e+308:
            return "Input number is Number.MAX_VALUE";
        case n === 5e-324:
            return "Input number is Number.MIN_VALUE";
        case n !== n:
            return "Input number is Number.NaN";
        default:
            return "Input number is " + n;
    }
}

// console.log(whatNumberIsIt(2));
