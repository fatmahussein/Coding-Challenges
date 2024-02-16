// sorting array in ascending order
const array = [3,1,2,6,7,4]

function bubbleSort(array) {
    // Only change code below this line
    for (let i = 0; i < array.length; i++) {

      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }

    }
    return array;
    // Only change code above this line
  }

  console.log(bubbleSort(array));