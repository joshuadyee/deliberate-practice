// Codecademy Calc Mean and Mode

function statsFinder(array) {
  let mean = array.reduce((sum, num) => sum + num) / array.length
  let numCount = {}
  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    if (numCount[num] === undefined) {
      numCount[num] = 0
    }
    numCount[num]++
  }
  let mode = Object.entries(numCount).reduce((a, b) => a[1] > b[1] ? a : b)
  return [mean, parseInt(mode[0])]
}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))


// HR Divisible Sum Pairs

function divisibleSumPairs(n, k, ar) {
  // given arr of ints (ar)
  // n = ar.length
  // k = positive int divisor
  // find num of pairs (i, j)
    // where  i < j and arr[i] + arr[j] % n === 0
  let pairs = []
  for (let i = 0; i < ar.length; i++) {
    let num = ar[i]
    for (let j = i + 1; j < ar.length; j++) {
      if ((num + ar[j]) % k === 0) {
        pairs.push([num, ar[j]])
      }
    }
  }
  return pairs.length
}
console.log(divisibleSumPairs(6, 3, [1,3,2,6,1,2]))


// FFC Mini Max Sum

function miniMaxSum(arr) {
  // given arr of 5 nums
  // find min sum of 4, find max sum of 4
  // return [min, max]

  arr.sort((a,b) => a - b)
  let minArr = arr.slice(0, arr.length - 1)
  let maxArr = arr.slice(1)
  const sum = (sum, num) => sum + num
  const min = minArr.reduce(sum, 0)
  const max = maxArr.reduce(sum, 0)
  let result = `${min} ${max}`
  console.log(result) // HR wanted it printed, not returned
}

console.log(miniMaxSum([1,2,3,4,5]))