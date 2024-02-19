function binarySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex +rightIndex)/2);

        if(target === arr[middleIndex]){
            return middleIndex;
        }

        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1;
        }else {
            leftIndex = middleIndex + 1;
        }
    }
  return "Value not found";
}

console.log(binarySearch([-5,2,4,6,10], 10)); // returns 4
console.log(binarySearch([-5,2,4,6,10], 6)); // returns 3
console.log(binarySearch([-5,2,4,6,10], 20)); // returns "Value not found"