// FFC Reverse a String

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("")
}

console.log(reverseString("hello"))

// or

function reverseString(str) {
  let reversed = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  return reversed
}

console.log(reverseString("hello"))


// FFC Factorialize a Number

function factorialize(num) {
  let product = 1
  for (let i = 1; i <= num; i++) {
    product *= i
  }
  return product
}

console.log(factorialize(5))

// or

function factorialize(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * factorialize(num - 1)
  }
}

console.log(factorialize(5))

// FFC Find the Longest Word in a String

function findLongestWordLength(str) {
  // given a str
  // return the length of the longest word 
  let arr = str.split(" ")
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i]
    }
  }
  return max.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

// or 

function findLongestWordLength(str) {
  return str.split(" ").reduce((a, b) => Math.max(a, b.length), 0)
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

// or

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length))
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))


// FFC Return Largest Numbers in Arrays

function largestOfFour(arr) {
  // given arr of sub arrays
  // find largest num of each sub array
  // put those nums into a new array
  // return new array
  let largest = []
  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0]
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j]
      }
    }
      largest.push(max)
  }
  return largest
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// or

function largestOfFour(arr) {
  return arr.map(subArr => Math.max(...subArr))
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))


// FFC Confirm the Ending

function confirmEnding(str, target) {
  // given str and target
  // check if str ends with target
  return str.slice(-target.length) === target
}

console.log(confirmEnding("Bastian", "n"))

// or

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target
}

console.log(confirmEnding("Bastian", "n"))


// FFC Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  let repeated = ""
  for (let i = 0; i < num; i++) {
    repeated += str
  }
  return repeated
}

console.log(repeatStringNumTimes("abc", 3))

// or

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return ""
  } else {
    return str + repeatStringNumTimes(str, num - 1)
  }
}

console.log(repeatStringNumTimes("abc", 3))


// FFC Truncate a String

function truncateString(str, num) {
  return str.length <= num ? str : str.slice(0, num) + "..."
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))

// or

function truncateString(str, num) {
  if (str.length <= num) {
    return str
  } else {
    return str.slice(0, num) + "..."
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))

