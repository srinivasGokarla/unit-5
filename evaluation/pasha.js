function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var line = 1
for(var i = 0; i < testcases; i++) {
    var str = input[line++].trim().split("").sort()
    var str1 = input[line++].trim().split("").sort()
  //  console.log(str,str1)
  anagragram(str,str1)
}
}
function anagragram(str,str1) {
 var res = "";
 var ans = "";
 for(var i = 0; i < str.length; i++) {
     res = res + str[i]
 } 
 for(var j = 0; j < str1.length; j++) {
     ans = ans + str1[j]
 }
 if(res == ans) {
     console.log("True")
 } else {
     console.log("False")
 }
}


if (process.env.USERNAME === "srini") {
  runProgram(`2
  abcd
  dcab
  aa
  aaa`);
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
