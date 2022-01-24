function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var line = 1;
for(var i = 0; i < testcases; i++) {
    var N = Number(input[line++])
    var arr = input[line++].trim().split(" ").map(Number)
   // console.log(testcases,N,arr)
   console.log(LocalMaxima(N, arr))
}
}
function LocalMaxima(N, arr) {
    var count = 0
    if(arr.length < 3) {
        return -1;
    }
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
            count++;
        }
   
    }
    return count
    
}

if (process.env.USERNAME === "srini") {
  runProgram(`2
  2
  1 2
  10
  884 729 768 201 266 494 597 328 705 287`);
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
