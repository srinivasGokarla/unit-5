function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var line = 1;
for(var i = 0; i < N; i++) {
    var trainable = input[line++].trim().split(" ").map(Number);

    var a = trainable[0]
    var b = trainable[1]
    var c = trainable[2]
    traiangleCheck(a,b,c)
}
}
function traiangleCheck(a,b,c) {
    if(a < (b+c) && b < (a+c) && c < (a+b)) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

if (process.env.USERNAME === "srini") {
  runProgram(`4
  4 5 13
  7 1 8
  2 5 4
  2 2 2
  `);
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
