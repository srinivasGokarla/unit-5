function runProgram(input) {
input = input.trim().split("\n")
var testcases = Number(input[0])
var line = 1;
for(var i = 0; i < testcases; i++) {
    var overs = input[line++].trim().split(" ").map(Number)
    var score = input[line++].trim().split(" ").map(Number)
   // console.log(overs,score)
   ManoftheMatch(overs, score)
}
}

function ManoftheMatch(overs, score) {
   var virat = score[0];
   //console.log(virat)
   var ab = 0;
   for(var j = 0; j < score.length; j++) {
   if(score[j] % 2 === 0 || (6 * j) % 2  === 1) {
      
       virat = virat + score[j]
       virat++;
      console.log( "virat:",virat)
   } else {
     
       ab++;
       ab = ab + score[j]
      console.log("ab",ab)
   }

   }
   if(ab > virat) {
       console.log('AB de Villiers')
   } else if(ab < virat) {
      console.log("Virat Kohli")
   } else {
       console.log("Tie")
   }
}


if (process.env.USERNAME === "srini") {
  runProgram(`3
  2
  1 2 0 0 1 1 6 6 4 1 6 1
  3
  0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
  1
  0 1 0 1 0 0`);
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
