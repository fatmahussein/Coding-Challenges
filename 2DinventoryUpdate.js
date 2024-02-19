function updateInventory(arr1, arr2) {

for (let i = 0; i < arr2.length; i++){
    let set = false;

    for (let j = 0; j < arr1.length; j++){    
        if (arr2[i][1] == arr1[j][1]){
            arr1[j][0] += arr2[i][0];
            set = true;
        }      
      }
      if(!set){
        arr1.push(arr2[i]);
      }    
}
arr1.sort((a, b) => a[1] > b[1] ? 1 : -1); // sort alphabetically
return arr1;
}

// Example usage
const arr1 = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

const arr2 = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

const updatedInventory = updateInventory(arr1, arr2);
console.log(updatedInventory);
// console.log(arr1);