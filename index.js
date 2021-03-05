function add(a, b) {
    return a += b;
}

function subtract(a, b) {
    return a -= b;
}

function multiply(a, b) {
    return a *= b;
}

function divide(a, b) {
    return a /= b;
}

function increment(n) {
    return ++n ;
}

function decrement(n) {
    return --n ;
}

function makeInt(n, base = "10") { // assume base is 10
    return parseInt(n, base); // parses n as an integer and returns the parsed integer
}

function preserveDecimal(n = 2.222) { // parses n as a floating point number and returns the parsed number
    return parseFloat(n);
}
