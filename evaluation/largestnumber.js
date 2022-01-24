function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var arr = input[1].trim().split(" ").map(Number)
//console.log(N,arr)
var max = 0;
for(var i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
        max = arr[i]
    }
}
console.log(max)
}

if (process.env.USERNAME === "srini") {
  runProgram(`5
  6 7 8 1 4`);
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
