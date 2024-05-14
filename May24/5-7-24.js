// FFC Slice and Splice

function frankenSplice(arr1, arr2, n) {
  // given 2 arrs and an index n
  // copy in arr1 at n index of arr2 
  // return new arr
  // original arrays shouldn't be changed 
  let combined = arr2.slice()
  for (let i = 0; i < arr1.length; i++) {
    combined.splice(n, 0, arr1[i])
    n++
  }
  return combined
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

// or

function frankenSplice(arr1, arr2, n) {
  let combined = arr2.slice()
  combined.splice(n, 0, ...arr1)
  return combined
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))


// FFC Falsy Bouncer

function bouncer(arr) {
  // remove falsy values from given arr
  // do not change og arr
  // return new arr
  return arr.filter(Boolean)
}

console.log(bouncer([7, "ate", "", false, 9]))

// or

function bouncer(arr) {
  let trutheys = []
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      trutheys.push(arr[i])
    } 
  }
  return trutheys
}

console.log(bouncer([7, "ate", "", false, 9]))

// or

function bouncer(arr) {
  // remove falsy values from given arr
  // do not change og arr
  // return new arr
  return arr.filter(item => item)
}

console.log(bouncer([7, "ate", "", false, 9]))


// FFC Where do I Belong

function getIndexToIns(arr, num) {
  // given an arr and num
  // return the lowest index the num would be at WHEN inserted into the arr and the arr has been sorted
  arr.push(num)
  arr.sort((a, b) => a - b) 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    }
  }
}

console.log(getIndexToIns([40, 60], 50))

// or

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a, b) => a - b)
  return arr.indexOf(num)
}

console.log(getIndexToIns([40, 60], 50))


// FFC Mutations

function mutation(arr) {
  // given arr
  // return true if arr[0] contains all the letters of arr[1]
  // has to ignore case
  let down = arr.map(word => word.toLowerCase())
  for (let i = 0; i < down[1].length; i++) {
    if (down[0].indexOf(down[1][i]) < 0) {
      return false
    }
  }
  return true
}

console.log(mutation(["hello", "hey"]))

// or

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(letter => arr[0].toLowerCase().indexOf(letter) !== -1)
}

console.log(mutation(["hello", "hey"]))


// FFC Chunky Monkey

function chunkArrayInGroups(arr, size) {
  // given an arr and a size (int)
  // group the arr in sub arrs 
    // console.log(arr.slice(0, size))
    // console.log(arr.slice(size, size + size))
  let subArrays = []
  for (let i = 0; i < arr.length; i += size) {
    subArrays.push(arr.slice(i, size + i))
  }
  return subArrays
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))

// or

function chunkArrayInGroups(arr, size) {
  let subArrays = []
  while (arr.length) {
    subArrays.push(arr.splice(0, size))
  }
  return subArrays
}


// FFC Sum All Numbers in a Range

function sumAll(arr) {
  // given arr (with 2 nums)
  // return the sum of the numbers between those 2 nums (inclusive)
    // sort arr to ensure which way we're incrementing
  arr.sort((a,b) => a - b)
    // find the nums from arr[0] to arr[1]
  let nums = []
  for (let i = arr[0]; i <= arr[1]; i++) {
    nums.push(i)
  }
  // console.log(nums)
  return nums.reduce((sum, a) => sum + a)
}

console.log(sumAll([1, 4]))

