function add(a, b) {
    return (a + b)
}
function subtract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    return (a / b)
}

add(1000, 757)
subtract(-100, 30)
multiply(526, 642)
divide(10,3)

function increment(n) {
    return (++n)
}

function decrement(n) {
    return (--n)
}
function makeInt(n) {
    return parseInt(n, 10)
}

function preserveDecimal(n) {
    return parseFloat(n, 4)
}

increment(78);
decrement(64);
makeInt("no");
makeInt("5");
preserveDecimal("five")
preserveDecimal("four");