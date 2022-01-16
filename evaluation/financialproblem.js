function runProgram(input) {
input = input.trim().split("\n")
//console.log(input)
var testcases = Number(input[0])
var line = 1;
for(var i = 0; i < testcases; i++) {
    var N = Number(input[line++])
    var arr = input[line++].trim().split(" ").map(Number)
   //console.log(N, arr)
   console.log(financialProblem(N, arr))
   
}
}
function financialProblem(N, arr) {
    var i = 0; j= 0;
    var count = 0
    while(i < arr.length && j < arr.length) {
         if(arr[i] < arr[j]) {
             count++;
            return count
         }
    }
}

if (process.env.USERNAME === "srini") {
  runProgram(`1
  6
  100 60 70 65 80 85`);
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
