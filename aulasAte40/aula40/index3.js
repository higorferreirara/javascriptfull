function num(x) {
    if (typeof x !== 'number') {
        return x
    } else if (x % 3 === 0 && x % 5 === 0) {
        return 'FizzBuzz'
    } else if (x % 5 === 0) {
        return 'Buzz'
    } else if (x % 3 === 0) {
        return 'Fizz'
    } else {
        return x
    }
}
console.log(num('a'))
for(let c = 0; c <= 100; c++) {
    console.log(c, num(c))
}
