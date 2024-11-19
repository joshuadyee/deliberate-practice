// C to F

// function convertCtoF(celsius) {
//   const fahrenheit = celsius * 9/5 + 32
//   return fahrenheit
// }

// console.log(convertCtoF(100))

  // or

  const convertCtoF = celsius => celsius * 9/5 + 32

  console.log(convertCtoF(100))


// Reverse String

// function reverse(str) {
//   let reversed = ""
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i]
//   }
//   return reversed
// }

// console.log(reverse("hello"))

  // or

  function reverse(str) {
    return str.split("").reverse().join("")
  }

  console.log(reverse("hello"))


// Factorialize

function factorialize(num) {
  if (num < 2) {
    return 1
  } else {
    return num * factorialize(num - 1)
  }
}

console.log(factorialize(5))


  // looping solution

  function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }
  
  factorialize(5);


// Find Longest Word

// function findLongestWordLength(str) {
//   let wordLengths = str.split(" ").map(word => word.length)
//   return Math.max(...wordLengths)
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

  // or

  function findLongestWordLength(str) {
    let words = str.split(" ")
    let longest = 0

    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest) {
        longest = words[i].length
      }
    }
    return longest
  }

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))


// Return Largest Nums in Arrays

function largestOfFour(arr) {
  let results = []
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i]
    let largest = subArr[0]
    for (let j = 0; j < subArr.length; j++) {
      if (subArr[j] > largest) {
        largest = subArr[j]
      }
    }
    results.push(largest)
  }
  return results
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

  // or
  
  // function largestOfFour(arr) {
  //   return arr.map(subArr => Math.max(...subArr))
  // }

  // console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))



// Truncate a String

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))