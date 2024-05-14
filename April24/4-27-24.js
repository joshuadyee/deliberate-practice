// FFC Slice and Splice

// given two arrays and a number
// copy each elemt of the first array into the second array starting at index n
// return the resulting array
// do not modify the original arrays

function frankenSplice(arr1, arr2, n) {
  let copy = arr2.slice()
  for (let i = 0; i < arr1.length; i++) {
  copy.splice(n, 0, arr1[i])
  n++
  }
  return copy 
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))


// FFC Falsy Bouncer

function bouncer(arr) {
  return arr.filter(Boolean)  
}

console.log(bouncer([7, "ate", "", false, 9]))

// FFC Where do I belong

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a,b) => a - b)
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    }
  }
}

console.log(getIndexToIns([3, 4, 5, 1, 6], 2))