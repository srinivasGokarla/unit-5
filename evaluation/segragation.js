function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
        var N = Number(input[line++])
        var arr = input[line++].trim().split(" ").map(Number)
        var Q = Number(input[line++])
     //   console.log(testcases,N,arr,Q)
     SegragationOddAndEven(N, arr,Q)
    }
}
function SegragationOddAndEven(N, arr,Q) {
      var even = "";
      var odd = "";
      for(var i = 0; i < arr.length; i++) {
          if(arr[i] % 2 === 0) {
              even +=  arr[i] + " "
          } else if(arr[i] % 2 !== 0){
              odd +=arr[i] + " "
          }
      }if(Q == 1) {
    console.log(even + "" + odd)
      } else {
          console.log(odd + "" + even)
      }
}

if (process.env.USERNAME === "srini") {
  runProgram(`2
  5
  1 2 3 4 5
  1
  5
  1 2 3 4 5
  2`);
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
