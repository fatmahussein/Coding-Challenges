// Given an integer array nums, move all 0's to the end of it while 
//maintaining the relative order of the non-zero elements.

function moveZerosToEnd(arr) {
    let ZeroIndex = 0;
 
     for (let i = 0; i < arr.length; i++) {
            if(arr[i] !== 0) {
            [arr[i], arr[ZeroIndex]] = [arr[ZeroIndex], arr[i]];
             ZeroIndex++;
         }
       
     }
     return arr;
 } 
 
 let  arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
 console.log(moveZerosToEnd(arr));