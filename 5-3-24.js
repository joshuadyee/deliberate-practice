// FFC Convert Celsius to Fahrenheit

function convertCtoF(celsius) {
  let fahrenheit = celsius * 9/5 + 32
  return fahrenheit
}

console.log(convertCtoF(30)) // 86

// FFC Reverse a String

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("")
}

console.log(reverseString("hello")) // olleh

// or

function reverseString(str) { 
  let reversed = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  return reversed
}

console.log(reverseString("hello")) // olleh

// FFC Factorialize a Number

function factorialize(num) {
  if (num === 0) {
    return 1
  }
  return num * factorialize(num - 1)
}

// or 

function factorialize(num) {
  let product = 1
  for (let i = 1; i <= num; i++) {
    product *= i
  }
  return product
}

console.log(factorialize(5)) // 120


// FFC Find the Longest Word in a String

function findLongestWordLength(str) {
  let arr = str.split(" ")
  let longest = arr[0]
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
    if (word.length > longest.length) {
      longest = word
    }
  }
  return longest.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")) // 6

// or

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length))
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")) // 6


// FFC Return Largest Numbers in Arrays

function largestOfFour(arr) {
  let largest = []
  for (let i = 0; i < arr.length; i++) {
    // in each sub-array, find the max num
    let sub = arr[i]
    let max = sub[0]
    for (let j = 0; j < sub.length; j++) {
      if (sub[j] > max) {
        max = sub[j]
      }
    }
    largest.push(max)
  }
  return largest
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// or

function largestOfFour(arr) {
  return arr.map(sub => Math.max(...sub)) // map each sub-array to the max num
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// FFC Confirm the Ending

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target
}

console.log(confirmEnding("Bastian", "n")) // true

// or

function confirmEnding(str, target) {
  let targetLength = target.length
  let ending = str.slice(-targetLength)
  return ending === target
}

console.log(confirmEnding("Bastian", "n")) // true
