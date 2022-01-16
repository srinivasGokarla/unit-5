 var arr = [0, -1, -2, 2, 1], k = 1
function findPairsWithGivenDifference(arr, k) {
    var array = arr.sort((a,b) => a-b)
  //  console.log(array)
    if(k == 0) {
      return []
    }
    var map = {}
    var answer = [];
    
    for(var i = 0; i < array.length; i++) {
      map[i - k] = i;
      for(var j = 0; j < array.length; j++) {
        if(j === map) {
          answer.push(map[j], j)
        }
      }
      return answer
    }
    
  }
  
  console.log(findPairsWithGivenDifference(arr, k))