function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var line = 1;
for(var i = 0; i < testcases; i++) {
    var[n,r] = input[line++].trim().split(" ").map(Number)
   // console.log(n,r)
 
   var value = Math.random() % 10
   var min = 0.001
   var max = 2147483647
   var ans = 0.0
   while(max > min) {
       ans = ((n-1.0) * value + r / Math.pow(value, n-1)) /n
       max = Math.abs(ans - value)
       value = ans
   }
 console.log(Math.floor(ans))
}
}



if (process.env.USERNAME === "srini") {
  runProgram(`3
  2 9
  6 4096
  3 126`);
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
