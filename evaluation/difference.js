function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var line = 1;
for(var i  = 0; i < testcases; i++) {
    var [N, K] = input[line++].trim().split(" ").map(Number)
    var arr = input[line++].trim().split(" ").map(Number)
   // console.log(arr,N,K,testcases)
   DifferenceOfK(arr,N,K)
}
}
function DifferenceOfK(arr,N,K) {
    var i = 0;
    var j = 0;
    var count = 0;
    while(i < N && j < N) {
        var D = Math.abs(arr[j] - arr[i])
        if(D < K) {
            j++
        } else if(D > K) {
            i++
        } else {
            i++;
            j++;
            count++;
        }
    } if(count > 0) {
        console.log('Yes')
    } else {
        console.log("No")
    }

}

if (process.env.USERNAME === "srini") {
  runProgram(`2
  5 3
  1 2 3 4 5
  5 8
  1 2 3 4 5 `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
