// Removing duplicates in a combined two arrays

let array1 = ["a", "b", "c", "d"],
array2 = ["a", "e", "f", "d"]

//let newArray = [].concat(array1, array2);

 //let newArray = [...array1, ...array2];
//console.log(newArray);

let set = new Set([...array1, ...array2]);
//console.log(set);

newArray = [...set];
console.log(newArray);