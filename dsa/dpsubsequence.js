function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var line = 1;
for(var i = 0; i < testcases; i++) {
    var str1 = input[line++].trim().split("")
    var str2 = input[line++].trim().split("")
  //  console.log(str1,str2, testcases)
    console.log(susequence(str1, str2))
 }
}
function susequence(str1, str2) {
   
    let j = 0;
    for(var i = 0; i < str2.length && j < str1.length; i++) {
        if(str1[j] == str2[i]) {
            j++
        } if(j == str1.length) {
            return "YES"
        }
    }
    return "NO"
    
}
 

if (process.env.USERNAME === "srini") {
  runProgram(`2
  abc
  adbce
  ax
  xaa`);
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
