function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    
    var line = 1;
    for(var i = 0; i < testcases; i++) {
        var N = Number(input[line++])
        var arr = input[line++].trim().split(" ").map(Number)
      // console.log(testcases,N,arr)
        
        console.log(alltwice(arr))
    }
    }
    
    function alltwice(arr) {
        var arr1 = arr[0]
      for(var i = 1; i < arr.length; i++) {
          arr1 = arr1 ^ arr[i]
     
      }
      
      
     return arr1
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`1
      5
      1 2 1 3 4 4 5 2 3`);
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
    