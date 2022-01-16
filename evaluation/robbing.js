function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
      var N = Number(input[line++])
      var arr = input[line++].trim().split(" ").map(Number)
    
     console.log( robbing(arr))
   
     }
    }
 function robbing(arr)
 {
   if(!arr.length)
   return 0;
 
 if(arr.length === 1)
 {
   return arr[0];
 }

 if(arr.length === 2)
 {
   return Math.max(arr[0] , arr[1])
 }

 for(var i = 2; i < arr.length; i++)
 {
   arr[i] = Math.max(arr[i-2]+ arr[i], (arr[i-3]  || 0 ) + arr[i])

 }

 return Math.max(arr[arr.length-1], arr[arr.length-2])
}

    
    if (process.env.USERNAME === "srini") {
      runProgram(`3
      2
      1 100
      3
      2 100 99
      4
      100 1 1 100`);
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