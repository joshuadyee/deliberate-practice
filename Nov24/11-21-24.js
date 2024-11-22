// C to F

function convertCtoF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

console.log(convertCtoF(30))


// Reverse a Str

// function reverseString(str) {
//   let reversed = ""

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i]
//   }
//   return reversed
// }

function reverseString(str) {
  return str.split("").reverse().join("")
}

console.log(reverseString("hello"))


// Factorialize

// function factorialize(num) {
  // if (num < 2) {
  //   return 1
  // } else {
  //   return num * factorialize(num - 1)
  // }
// }

function factorialize(num) {
  let product = 1
  for (let i = num; i >= 2; i--) {
    product *= i
  }
  return product
}

console.log(factorialize(5))


// Longest Word in a Str

// function findLongestWordLength(str) {
//   let arr = str.split(" ")
//   let longest = arr[0]

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > longest.length) {
//       longest = arr[i]
//     }
//   } 
//   return longest.length
// }

function findLongestWordLength(str) {
  let arr = str.split(" ")

  return Math.max(...arr.map(w => w.length))
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))


// Largest of Four

// function largestOfFour(arr) {
//   let largestNums = []

//   for (let i = 0; i < arr.length; i++) {
//     let largest = arr[i][0]
//     console.log(largest)
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > largest) {
//         largest = arr[i][j]
//       }
//     }
//     largestNums.push(largest)
//   }
//   return largestNums
// }

function largestOfFour(arr) {
  return arr.map(subArr => Math.max(...subArr))
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))


// Confirm the Ending

function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

console.log(confirmEnding("Bastian", "n"))


// Repeat a String

function repeatStringNumTimes(str, num) {
  let repeatedStr = ""

  for (let i = 0; i < num; i++) {
    repeatedStr += str
  }
  return repeatedStr
}


console.log(repeatStringNumTimes("abc", 3))


// Truncate String

function truncateString(str, num) {
  return str.length <= num ? str : str.slice(0, num) + "..."
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))


// Finders Keepers

// function findElement(arr, func) {
//   return arr.find(e => func(e))
// }

function findElement(arr, func) {
  let num = 0

  for (let i = 0; i < arr.length; i++) {
    num = arr[i]
    if(func(num)) {
      return num
    }
  }
  return undefined
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))


// Boo Who

function booWho(bool) {
  if (typeof bool === "boolean") {
    return true
  }
  return false
}

console.log(booWho(null))


// Title Case a Sentence

function titleCase(str) {
  return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")

}

console.log(titleCase("I'm a little tea pot"))


// Slice and Splice

// function frankenSplice(arr1, arr2, n) {
//   let copy = arr2.slice()

//   copy.splice(n, 0, ...arr1)
//   return copy
// }

function frankenSplice(arr1, arr2, n) {
  let copy = arr2.slice()

  for (let i = 0; i < arr1.length; i++) {
    copy.splice(n, 0, arr1[i])
    n++
  }
  return copy
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))


// Falsy Bouncer

function bouncer(arr) {
  return arr.filter(Boolean)
}

console.log(bouncer([7, "ate", "", false, 9]))


// Where Do I Belong

// function getIndexToIns(arr, num) {
//   arr.push(num)
//   arr.sort((a,b) => a - b)
//   return arr.indexOf(num)
// }

function getIndexToIns(arr, num) {
  return arr.filter(e => num > e).length
}

console.log(getIndexToIns([40, 45, 60], 50))


// Mutations

function mutation(arr) {
  let first = arr[0].toLowerCase()
  let target = arr[1].toLowerCase()

  for (let i = 0; i < target.length; i++) {
    if (first.includes(target[i]) !== true) {
      return false
    }
  }
  return true
}

console.log(mutation(["hello", "hey"]))


// Chunky Monkey 

// function chunkArrayInGroups(arr, size) {
//   let newArr = []

//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size))
//   }
//   return newArr
// }

function chunkArrayInGroups(arr, size) {
  const newArr = []

  while (arr.length > 0) { // while arr is not empty
    newArr.push(arr.splice(0, size))  // remove size elements from arr and push them to newArr
  }
  return newArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))