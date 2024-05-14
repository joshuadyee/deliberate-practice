// FFC Where Do I Belong

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a,b) => a - b)
  return arr.indexOf(num)
}

console.log(getIndexToIns([40, 60], 50))

// or

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a,b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    }
  }  
}

console.log(getIndexToIns([40, 60], 50))


// FFC Mutations

function mutation(arr) {
  let down = arr.map(word => word.toLowerCase())
  for (let i = 0; i < down[1].length; i++) {
    if (down[0].indexOf(down[1][i]) < 0) {
      return false
    }
  }
  return true
}

console.log(mutation(["hello", "hey"]))


// FFC Chunky Monkey

function chunkArrayInGroups(arr, size) {
  let newArr = []
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size))
  }
  return newArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))

// or

function chunkArrayInGroups(arr, size) {
  let newArr = []
  while (arr.length) {
    newArr.push(arr.splice(0, size))
  }
  return newArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))


// FFC Diff Two Arrays

function diffArray(arr1, arr2) {
  // given 2 arrays
  // compare the 2 arrs
  // return a new arr of elems that aren't found in both arrays
    // init new Arr
  const newArr = []
    // loop through arr1
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {  
      newArr.push(arr1[i])
    }  // if arr2 doesn't have elem from arr1, push to newArr
  }
    // loop through arr2
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) < 0) {
      newArr.push(arr2[j])
    }  // if arr1 doesn't have elem from arr2, push to newArr
  }
  return newArr
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))

// or

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item))
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
