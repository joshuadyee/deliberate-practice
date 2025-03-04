// Factorialize

function factorialize(num) {
  if (num < 2) {
    return 1
  } else {
    return num * factorialize(num - 1)
  }
}

console.log(factorialize(5))

// Longest Word in a String

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
  return Math.max(...str.split(" ").map(word => word.length))
}

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'))


// Largest of Four

// function largestOfFour(arr) {
//   let largestNums = []
//   for (let subArr of arr) {
//     let max = subArr[0]
//     for (let num of subArr) {
//       if (num > max) {
//         max = num
//       }
//     }
//       largestNums.push(max)
//   }
//   return largestNums
// }

function largestOfFour(arr) {
  return arr.map(subArr => Math.max(...subArr))
}

console.log(largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]))

// Confirm the Ending

function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

console.log(confirmEnding('Bastian', 'n'))


// Repeat a String

function repeatStringNumTimes(str, num) {
  let repeated = ""
  for (let i = 0; i < num; i++) {
    repeated += str
  }
  return repeated
}

console.log(repeatStringNumTimes('abc', 3))


// Truncate a String

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8))


// Finders Keepers

function findElement(arr, func) {
  return arr.find(e => func(e))
  // can just write as arr.find(func), automatically iterates each elem through the callback fn
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))


// Title Case a Sentence

function titleCase(str) {
  return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

console.log(titleCase("I'm a little tea pot"))


// Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let copy = arr2.slice()
  copy.splice(n, 0, ...arr1)
  return copy
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))


// Where do I belong

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a,b) => a - b)
  return arr.indexOf(num)
}

console.log(getIndexToIns([40, 60], 50))


// Mutations

function mutation(arr) {
  let wordOneLower = arr[0].toLowerCase()
  let wordTwoLower = arr[1].toLowerCase()

  for (let i = 0; i < wordTwoLower.length; i++) {
    if (!wordOneLower.includes(wordTwoLower[i])) {
      return false
    }
  }
    return true
}

console.log(mutation(['hello', 'hey']))


// Chunky Monkey


function chunkArrayInGroups(arr, size) {
  let results = []

  for (let i = 0; i < arr.length; i+=size) {
    results.push(arr.slice(i, size + i))
  }
  return results
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2))