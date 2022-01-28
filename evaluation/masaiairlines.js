function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var check = input[1].trim().split(" ").map(Number)
var hand = input[2].trim().split(" ").map(Number)
//console.log(N,check,hand)

for(var i = 0; i < N; i++) {
    if(check[i] <= 15 && hand[i] <= 7) {
        console.log("Boarding")
       
    } else {
        console.log("Stop")
    }
}
}

if (process.env.USERNAME === "srini") {
  runProgram(`4
  12 14 15 6
  8 5 7 4`);
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
