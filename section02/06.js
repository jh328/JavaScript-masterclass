/*
function addUpTo(n){
    let total =0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log("addUpTo : ", addUpTo(6));
*/


/*
function addUpTo(n){
    return n * (n+1) / 2;
}
console.log("addUpTo : ", addUpTo(6));
*/


function addUpTo(n){
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += n;
    }
    return total
}

var t1 = performance.now();
addUpTo("큰 숫자 : ", 1000000000)
var t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

