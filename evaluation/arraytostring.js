function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var arr = input[1].trim().split(" ").map(Number)

//console.log(arr,N)
var res = ""
for(var i = 0; i < arr.length; i++) {
   if(arr[i] < 0) {
       res = res + 0
   } else {
       res = res + arr[i]
   }
}
console.log(res)
}

if (process.env.USERNAME === "srini") {
  runProgram(`5
  2 -4 6 8 -9`);
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
