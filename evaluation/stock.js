function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var [a,b,c,d,e,f,g]= input[1].trim().split(" ").map(Number)
//console.log(N)
var ans = 0;
if(a === 1) {
    ans = ans + (5 * 110)
} if(b === 1) {
  ans = ans + (2 * 120)
}if(c === 1) {
    ans = ans + (2* 42)
  }if(d === 1) {
    ans = ans + (3* 53)
  }if(e === 1) {
    ans = ans + (2* 40)
  }if(f === 1) {
    ans = ans + (5* 32)
  }if(g === 1) {
    ans = ans + (2* 126)
  }
  console.log(N * ans)
}

if (process.env.USERNAME === "srini") {
  runProgram(`4
  0 1 1 1 0 0 1`);
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
