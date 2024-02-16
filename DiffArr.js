function DiffArray(arr1,arr2){
    var newArr = [];

    for(let i=0; i < arr1.length; i += 1){
        if(arr2.indexOf(arr1[i]) === -1){
            newArr.push(arr1[i]);
    }
}

for(let j=0; j < arr2.length; j += 1){
    if(arr1.indexOf(arr2[j]) === -1){
        newArr.push(arr2[j]);
}
}

return newArr;

}
console.log(DiffArray(
    [1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5]
    ));