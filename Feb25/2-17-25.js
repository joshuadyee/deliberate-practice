// Actualize Deliberate Practice 

// Loops 5


// Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16]

// const nums = [[1, 3], [8, 9], [2, 16]]
// const flattened = []

// function flatten(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let pair  = nums[i]
//     for (let j = 0; j < pair.length; j++) {
//       flattened.push(pair[j])
//     }
//   }
//   return flattened
// }

// console.log(flatten(nums))



// Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

const arr1 = ["a", "b", "c"]
const arr2 = ["d", "e", "f", "g"]


const combineArrays = (arr1, arr2) => {
  const combined = []

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      combined.push(arr1[i] + arr2[j])
    }
  }

  return combined
}

console.log(combineArrays(arr1, arr2))


// Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

const arr = ['a', 'b', 'c', 'd']


function combineArr(array) {
  let combined = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] !== array[j]) {
        combined.push(array[i] + array[j])
      }
    }
  }
  return combined
}

console.log(combineArr(arr))


// Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

const numbers = [5, -2, 1, -9, -7, 2, 6]

function multipyTwoLargestNums(arr) {
  let absoluteVals = arr.map(num => Math.abs(num))
  let sorted = absoluteVals.sort((a, b) => b - a)
  return sorted[0] * sorted[1]
}

console.log(multipyTwoLargestNums(numbers))


// Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

const numberPairs = [[1, 3], [8, 9], [2, 16]]

const addNestedPairs = arr => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    let pair = arr[i]
    for (let j = 0; j < pair.length; j++) {
      sum += pair[j]
    }
  }
  return sum
}

console.log(addNestedPairs(numberPairs))


// Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

let array1 = [1,2]
let array2 = [6,7,8]

function addElements(arr1, arr2) {
  let newArr = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      newArr.push(arr1[i] + arr2[j])
    }
  }
  return newArr
}

console.log(addElements(array1, array2))


// Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9]

let nums = [2,8,3]

function multiplyElements(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      newArr.push(arr[i] * arr[j])
    }
  }
  return newArr
}

console.log(multiplyElements(nums))



