
function fibonacchi(n){
    var fibo = [0, 1];
    for (var i = 2; i <= 10; i++) {
        fibo[i] = fibo[i-1] + fibo [i-2];
    }
    return fibo;
}
var result = fibonacchi(12);
console.log(result);
