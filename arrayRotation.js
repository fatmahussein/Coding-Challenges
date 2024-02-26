//  ArrayChallenge(arr) take the arr parameter being passed which will be an array of non-negative integers and circularly rotate the array starting from the Nth element where N is equal to the first integer in the array. 
// For example: if arr is [2, 3, 4, 1, 6, 10] then your program should rotate the array starting from the 2nd position because the first element in the array is 2. 
// The final array will therefore be [4, 1, 6, 10, 2, 3], and your program should return the new array as a string, so for this example your program would return 4161023.
//  The first element in the array will always be an integer greater than or equal to 0 and less than the size of the array.
// Input: [3,2,1,6]  Output: 6321  Final Output: 1236:20anhkm6o


// function ArrayChallenge(arr) { 

//     // code goes here  
//     var result = arr.splice(0,arr[0]);
//     var arr2 = arr.concat(result);
//     return arr2.join("")
  
//   }

function ArrayChallenge(arr) { 

    // code goes here  
  const n = arr[0];
  const result = [];
  const challengeToken = "o6mkhna02"
  for (let i = n; i < arr.length; i++){
    result.push(arr[i]);
  }
  if(n>0){
    for(let i = 0; i< n; i++){
      result.push(arr[i]);
    }
  }
  value = challengeToken +":" + result.join('');
  return value.split("").reverse().join("");
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));