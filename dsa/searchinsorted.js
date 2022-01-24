function runProgram(input) {
input = input.trim().split("\n")
var[N,K] = input[0].trim().split(" ").map(Number)
var arr = input[1].trim().split(" ").map(Number)
//console.log(arr,N,K)
console.log( searchSortedArray(N, arr,K))
}
function searchSortedArray(N, arr,K) {
    var lo = 0;
    var hi = N-1;

    while(lo <= hi) {
        mid = lo + Math.floor(hi-lo)/2;
        if(arr[mid] === K) {
            return mid
        } if(arr[mid] < K) {
            lo = mid + 1;
         }
        else {
            hi = mid - 1;
        }
    }
        return -1
    }


if (process.env.USERNAME === "srini") {
  runProgram(`5 1
  3 4 5 1 2`);
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
