// FFC Sum All Numbers in a Range

function sumAll(arr) {
  // passed arr of two numbers
  // return sum of all nums inbetween those two nums (inclusive)
  arr.sort((a, b) => a - b)
  const first = arr[0]
  const second = arr[1]
  let sum = 0
  for (let i = first; i <= second; i++) {
    sum += i
  }
  return sum
}

console.log(sumAll([4, 1]))

//or

function sumAll(arr) {
  const first = arr[0]
  const second = arr[1]
  let sum = 0
  for (let i = Math.min(first, second); i <= Math.max(first, second); i++) {
    sum += i
  }
  return sum
}

console.log(sumAll([4, 1]))


// Diff Two Arrays
