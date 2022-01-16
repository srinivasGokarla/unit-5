/*

iddhant Nagpal11:49 AM
// INPUT: [1, 2, 3, 4, 5, 1, 2], OUTPUT: 3 


for(var i = 0; i < arr.length; i++) {
	var isRepeating = false
		for(var j = i+1; j < arr.length; j++) {
			if(arr[i] == arr[j]) {
				isRepeating = true
				break
			}
		}
		
		if (isRepeating == true) {
			console.log(arr[i])
			break
		}
	}
}
// INPUT: [1, 2, 3, 4, 5, 1, 2]

var nonRepeatingElementsArray = [];



for(var i = 0; i < arr.length; i++) {
	var isRepeating = false
		for(var j = i+1; j < arr.length; j++) {
			if(arr[i] == arr[j]) {
				isRepeating = true
				break
			}
		}
		
		if (isRepeating == true) {
			nonRepeatingElements.push(arr[i])
		}
	}
}


for(var k = 0; k < nonRepeatingElementsArray.length; k++) {
	console.log(nonRepeatingElementsArray[0])
}





*/
