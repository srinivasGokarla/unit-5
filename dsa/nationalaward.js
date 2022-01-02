function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var line = 1;
for(var i = 0; i < testcases; i++) {
    var N = Number(input[line++])
    var arr = input[line++].trim().split(" ").map(Number)
    nationalAward(arr) 
}
}
function nationalAward(arr) {
    var arr1 = []
    for(var i = 0; i < arr.length; i++) {
        for(var j = i; j< arr.length; j++) {

        }
    }if(arr[i] <= arr[j]) {
        arr1.push(arr[i])
    }
    console.log(arr1.join(" "))
}

if (process.env.USERNAME === "srini") {
  runProgram(`3
  1
  2
  3
  2 0 1
  4
  2 0 2 1`);
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
