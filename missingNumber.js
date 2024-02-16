function missingNumber(nums) {
    let n = nums.length;
    let totalSum = n * (n + 1) / 2;
    
    let arraySum = 0;
  
    for(i of nums){
      arraySum += i;
    }
  
    return totalSum - arraySum;
  }
  
  console.log(missingNumber([3, 0, 1]));