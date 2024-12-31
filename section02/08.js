function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i <= n; i++) {
        console.log("i의 값 : ", i);
    }
    console.log("At the top!\nGoing down..."); //\n <줄바꿈>
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}

let t1 = performance.now()
console.log("ddd 값 확인", t1)
console.log("countUpAndDown 함수 : ", countUpAndDown(6));
let t2 = performance.now();
console.log("t2 ", t2)
console.log(`계산 시간 : ${(t2 - t1) / 1000}seconds.`);


/*===============================*/

function printAllPairs(n) { // 함수 호출할 시 인수에 10이 있기 때문에 매개변수에 10이 들어간다.
    for (var i = 0; i < n; i++) { // i의 현재 값 0; i는 10보다 작을 동안 i는 한 사이클 돌 때ㅐ마다 1씩 증가 0,1,2,3,4,5,6,7,8,9
        console.log("i의 값 ", i , " j 의 값 : ", j)
        for (var j = 0; j < n; j++) { // j의 현재 값 : 0, j는 10보다 작을 동안 j는 1씩 증가 1,2,3,4,5,6,7,8,9
            console.log("i의 값 ", i , " j 의 값 : ", j)
            console.log("i의 값 ", i , " j 의 값 : ", j)
            // 9,9 즉 1,1, 2,2, 3,3 이런씩으로.... 9,9 이렇게 증가를 할 것 같다.
        }
    }
}

console.log("printAllParis 함수 값 확인 : ", printAllPairs(3));