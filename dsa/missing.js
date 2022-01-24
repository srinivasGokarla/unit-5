// var arr = [1,2,3,5];
// var arr1 = [];
// var sum = 1;

// for(var i = 0; i < arr.length; i++) {
//     if(arr[i] !== i) {
//        arr1.push(i)
//     }
//     console.log(arr1)
// }


// var arr = [2, 4, 1, 3, 5]

// let count = 0;
// for(let i = 0; i < arr.length; i++) {
    
//     for(let j = i+1; j < arr.length; j++) {
//         if(arr[i] > arr[j]) {
//              count++;
           
            
//         }
//     }
  
// }
// console.log(count)

// var arr = [0, 2, 1, 2, 0]
// var res = [];

// sort012(arr, n)
//     {
//         //your code here
//          let low = 0, high = n-1, mid = 0;
//         while(mid <= high){
//             if(arr[mid]==0) {
//                 let temp=arr[low];
//                 arr[low]=arr[mid];
//                 arr[mid]=temp;
//                 low++;
//                 mid++;
//             } else if(arr[mid]==1) {
//                 mid++;
//             } else {
//                 let temp=arr[mid];
//                 arr[mid]=arr[high];
//                 arr[high]=temp;
//                 high--;
//             }
//         }
//     }





//     a = [1,3,5,2,2]

//     equilibriumPoint(a, n)
//     {
//         //your code here
//         var sum = 0;
//         var sum2 = 0;
//         for(var i = 0; i < n; i++) {
//             sum = sum + a[i]
//         }
//         for(var j = 0; j < n; j++) {
//             if(sum2  === sum - a[j]) {
//                 return j+1;
//             }
//             sum = sum - a[j];//13,10,5
//             sum2 = sum2 + a[j]// 1,4,10
//         }
//         return -1
//     }

// var arr = [16,17,4,3,5,2];
// var n = 6

//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i+1; j < arr.length; j++) {
//             if(arr[i] <= arr[j]) {
//                 break;
//             }if(j === n) {
//                 console.log(arr[i])
//             }
//         }
//       }

//       let v=[];
    
//       let max = arr[n-1];
      
//       //We start traversing the array from last element.
//       for(let i =n-1; i >= 0; i--){
          
//           //Comparing the current element with the maximum element stored. 
//           //If current element is greater than max, we add the element.
//           if(arr[i] >= max){
//               //Updating the maximum element.
//               max = arr[i];
//               //Storing the current element.
//               v.push(max);
//           }
//       }
      
//       //Finally reversing the vector in which leaders are stored.
//       v.reverse();
//       //returning the answer.
//       return v;




//arr[] = {0900, 0940, 0950, 1100, 1500, 1800}
//dep[] = {0910, 1200, 1120, 1130, 1900, 2000}

S = i.like.this.program.very.much

reverseWords(s)
    {
        let result = "";
        let curr_word = "";
        let words = new Array();
    
        //initially reversing individual words of the given string one by one.
        for (let i = 0; i < s.length; ++i)
        {
            //if '.' is encountered, we store the word in list.
            if(s[i] == '.')
            {
                words.push(curr_word);
                curr_word = "";
            }
            //else adding the characters in current word in such
            //a way that original words get reversed.
            else
                curr_word += s[i];
        }
        //storing the last remaining word in list.
        words.push(curr_word);
        
        //now reversing the whole modified string by adding all 
        //the elements of list in a single string in reverse order.
        for (let i = words.length-1; i>=0; --i)
        {
            result += words[i];
            if(i!=0)
                result += '.';
        }
        //returning the result.
        return result;
    }