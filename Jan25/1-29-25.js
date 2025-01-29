// Sum All Numbers in a Range
  // given an arr w/ 2 numbers, find the sum of all numbers inbetween the 2 (inclusive)

const sumAll = arr => {
  let sum = 0
  if (arr[1] < arr[0]) {
    arr = [arr[1], arr[0]]
  }
  for (let i = arr[0]; i <= arr[1]; i++) {
    console.log(i)
    sum += i
  }
  return sum
}

console.log(sumAll([1,4]))

  // can also use .sort() or Math.min()/Math.max()


// Diff Two Arrays
  // compare 2 arrays
  // create and return new array with elements not found in both


  // attempt 1: did not work for all
// const diffArray = (arr1, arr2) => {
//   const newArr = []
//   let longerArr;
//   let shorterArr;
//   if (arr1.length >= arr2.length) {
//     longerArr = arr1
//     shorterArr = arr2
//   } else if (arr2.length > arr1.length) {
//     longerArr = arr2
//     shorterArr = arr1
//   }

//   for (let i = 0; i <= longerArr.length; i++) {
//     if (shorterArr.indexOf(longerArr[i]) < 0) {
//       newArr.push(longerArr[i])
//     }
//   }
//   return newArr
// }


  // almost works except type conversion for numbers in the output => have to use Map not Object
// const diffArray = (arr1, arr2) => {
//   let newArr = []
//   let combinedArr = [...arr1, ...arr2]
//   console.log(combinedArr)
//   let map = {}
  
//   for (let i = 0; i < combinedArr.length; i++) {
//     let item = combinedArr[i]
//     if (map[item] === undefined) {
//       map[item] = 0
//     } else {
//       map[item]++
//     }
//   }
//   console.log(map)
//   for (let item in map) {
//     if (map[item] === 0) {
//       newArr.push(item)
//     }
//   }
//   return newArr
// }

const diffArray = (arr1, arr2) => {
  let combinedArr = [...arr1, ...arr2]
  return combinedArr.filter(item => !arr1.includes(item) || !arr2.includes(item))
}

console.log(diffArray( [1, 2, 3, 5], [1, 2, 3, 4, 5]))


// Seek and Destroy
  // given arr as initial arg followed by one or more arguments
  // remove elems from initial array if they are the same as the arguments

function destroyer(arr) {
  let newArr = []
  let extraArgs = []
  for (let arg in arguments) {
    if (arg > 0) {
      extraArgs.push(arguments[arg])
    }
  }
  // console.log(arguments)
  for (let i of arr) {
    if (!extraArgs.includes(i)) {
      newArr.push(i)
    }
  }
  return newArr
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) // [1,1]
