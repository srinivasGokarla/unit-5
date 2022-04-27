
let arr = [12, 3, 4, 1, 6, 9], sum = 24; Output: 12, 3, 9 
//console.log(arr)
function findTripplet(arr,sum) {
    
    for(let i = 0; i < arr.length-2; i++) {
        for(let j = i+1; j < arr.length-1; j++) {
            for(let k = j+1; k < arr.length; k++) {
                if(arr[i] + arr[j]+ arr[k] === sum) {
                    console.log(arr[i], arr[j], arr[k])
                    break;
                } 
                
            }
        }
    }

}
findTripplet(arr,sum)


//2nd

let N = 17, M = 3

if(N % M === 0) {
    console.log(N)
} else if((N+1) % M === 0) {
    console.log(N+1)
} else if((N-1)% M === 0) {
    console.log(N-1)
}

/*

The General manager,
Perennial Systems,
Pune.
    Respcted sir,

    I am Gokarla Srinivas(employe id : 12345) employe in our compnay for last 6 months, Recently I got a project of Nykaa, I am working for one month. In that project only 3 people working but this is very less people for this type of project, why because its a big project and its have more functionalities are there. so i working for around 15 hours in day for that project and its more pressure on me and its affect on my personal life also
    so please add some more members in that project and reduce some work on me.
    Thanking you sir.
    

*/
