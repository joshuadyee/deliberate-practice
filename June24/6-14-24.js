// Diff Two Arrays

function diffArray(arr1, arr2) {
  // passed two arrays 
  // compare arrs, find elements that only exist in one arr and not in both
  // return new array of elements not in both og arrs

  const newArr = []
  function onlyInFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) < 0) {
        newArr.push(first[i])
      }
    }
  }

  onlyInFirst(arr1, arr2)
  onlyInFirst(arr2, arr1)
  
  return newArr
}

console.log(diffArray([1, 2, 3, 5, 9], [1, 2, 3, 4, 5]))

// or

function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item)) 
}

console.log(diffArray([1, 2, 3, 5, 9], [1, 2, 3, 4, 5]))


