// FFC reverseString

function reverseString(str) {
  return str.split("").reverse().join("")
}

// or 

function reverseString(str) {
  let reversed = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  return reversed
}


// FFC Factorialize

function factorialize(num) {
  // given n, find its factorial
  // factorial is n * (n-1) down to 1

  if (num === 0) {
    return 1
  } else {
    return num * factorialize(num - 1)
  }
}

// or

function factorialize(num) {
  let product = 1
  for (let i = 1; i <= num; i++) {
    product *= i
  }
  return product
}

// FFC Find the Longest Word in a String

function findLongestWordLength(str) {
  let words = str.split(" ")
  let longestWord = words[0]
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i]
    }
  } 
  return longestWord.length
}

// FFC Return Largest Numbers in Arrays

function largestOfFour(arr) {
  let largestNumbers = []
  for (let i = 0; i < arr.length; i++) {
    let subArray = arr[i]
    let largest = subArray[0]
    for (let j = 0; j < subArray.length; j++) {
      let num = subArray[j]
      if (num > largest) {
        largest = num
      }
    }
    largestNumbers.push(largest)
  }
  console.log(largestNumbers)
} 

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])


// FFC Truncate a String

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0,num) + "..."
  } else {
    return str
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))