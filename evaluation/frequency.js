function runProgram(input) {
    input = input.trim().split("\n");
    var[N,Q] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var line = 2;
    for(var i = 0; i < Q; i++){
        var[l,r,val]  = input[line++].trim().split(" ").map(Number)
      //console.log(N,Q,l,r,val,arr);
        var count = 0;
      for(var j = l-1; j < r; j++){
        if(arr[j] === val){
            count++;
        }
    }
    console.log(count);
}
    
    
  }
  if (process.env.USERNAME === "srini") {
    runProgram(`6 2
    1 5 3 2 3 2 
    3 6 2
    4 4 2
    `);
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