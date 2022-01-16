function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var line = 1;
for(var i = 0; i < testcases; i++) {
    var arr = input[line++].trim().split(" ").map(Number)
    missing(arr)
}
}
 function missing(arr) {

     for(var i = 0; i < 12; i++) {
         if(arr[i] != i) {
             console.log(i)
             break;
         }
     }
 }


if (process.env.USERNAME === "srini") {
  runProgram(`2
  0 1 2 4 5 6 9 10 11 12 
  1 2 3 5 7 8 9 10 11 12`);
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
