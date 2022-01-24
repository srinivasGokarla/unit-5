function runProgram(input) {
input = input.trim().split("\n")
var N = Number(input[0])
var line = 1;
for(var i = 0; i < N; i++) {
    var str = input[line++].trim().split("")
   // console.log(str)
 var result = commonStart(str);
 result.length > 0 ? console.log(result) : console.log("None")

}
}
function commonStart(str) {
  var res = "";
  for(var i = 0; i < str[0].length; i++) {
      var temp = str[0][i];
      for(var j = 1; j < str.length; j++) {
          if(str[j][i] !== temp) 
              return res
          }
          res +=  str[0][i];
      }
      return res
  
}

if (process.env.USERNAME === "srini") {
  runProgram(`1
  rbbyrrby rbb rbbybbryb`);
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
