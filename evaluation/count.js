function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var line = 1;
for(var i = 0; i < N; i++) {
    var names = []
    names.push(input[line++])
  //  console.log(names,N)
  var count = 0;
  for(var j = 0; j < names.length; j++) {
 
  }
 

}
}

if (process.env.USERNAME === "srini") {
  runProgram(`3
  masai
  school
  masai`);
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
