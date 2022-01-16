function runProgram(input) {
input = input.trim().split("\n")
var[a,b] = input[0].trim().split(" ").map(Number)

//console.log(string)
tileOfTogetherness(a,b)
}
function tileOfTogetherness(a,b) {
    while(a <= b) {
        var arr = a.toString().split("");
        var value = 0;
for(var i = 0; i < arr.length; i++) {
    value = value + Number(arr[i]);
}
  a = a + value;
  if( a == b) {
      return a
  }
    }
    return -1
}

if (process.env.USERNAME === "srini") {
  runProgram(`32 47`);
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
