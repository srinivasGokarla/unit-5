function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var strength = input[1].trim().split(" ").map(Number).sort()
var  midichlorians = input[2].trim().split(" ").map(Number).sort()
//console.log(N,strength,midichlorians)
var count = 0
for(var i = 0; i < N; i++) {
    if(strength[i] < midichlorians[i]) {
       count++
    }
}
    if(count > 0) {
        console.log("No")
    }else {
        console.log("Yes")
    }
}

if (process.env.USERNAME === "srini") {
  runProgram(`5
  123 146 454 542 456
  100 328 248 689 200`);
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
