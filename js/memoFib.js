const memo = {}
let fib = function(n) {
    if (n === 0 || n === 1) {
        return n
    } else if (memo[n]) {
        return memo[n]
    } else {
        let result = fib(n-1) + fib(n-2)
        memo[n] = result
        return result
    }
}

console.log(fib(10))