function sym(arr1, arr2) {
      const result = [];
  
      arr1.forEach((item) => {
        if (arr2.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
      arr2.forEach((item) => {
        if (arr1.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      })
      return result;
    }

  console.log(sym([1, 2, 3], [5, 2, 1, 4]));