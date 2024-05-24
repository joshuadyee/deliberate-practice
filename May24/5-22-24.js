// FFC Sum All Numbers in a Range

function sumAll(arr) {
  // passed arr of 2 nums
  // return sum of all ints between those two numbers (inclusive)
  // arr doesn't come in order

  arr.sort((a, b) => a - b) 
  // console.log(arr)
  const first = arr[0]
  const second = arr[1]
  let sum = 0 
  for (let i = first; i <= second; i++) {
    sum += i
  }
  return sum
}

console.log(sumAll([10, 5]))


// FFC Diff Two Arrays

function diffArray(arr1, arr2) {
  // passed 2 arrs
  // compare both arrs
  // return new arr with elems found in only one of the two given arrs
  // (find the symmetric difference)

  const newArr = []
  
}