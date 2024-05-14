// FFC Return Largest Number in Arrays

function largestOfFour(arr) {
  // given arr of 4 sub-arrays
  // return a new array with largest element of each sub array
  let largest = [] // init empty arr for largest elems
    // loop thru outer array
  for (let i = 0; i < arr.length; i++) {
      // init max variable
    let max = arr[i][0]
      // iterate thru sub-arrays
    for (let j = 0; j < arr[i].length; j++) {
        // compare max to each elem 
      if (arr[i][j] > max) {
        max = arr[i][j]
      }
    }
      // push in max value from each sub array
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
  return str.slice(str.length - target.length) === target
}

console.log(confirmEnding("Bastian", "n"))

// or 

function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

console.log(confirmEnding("Bastian", "n"))


// FFC Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  let repeated = ''
  for (let i = 0; i < num; i++) {
    repeated += str
  }
  return repeated
}

console.log(repeatStringNumTimes("abc", 3))

// or

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : ''
}

console.log(repeatStringNumTimes("abc", 3))


// FFC Truncate a String

function truncateString(str, num) {
  // given str and a num
  // if str.length <= num => return first num chars from the str
  // else return str + "..."
  if (str.length <= num) {
    return str
  } else {
    return str.slice(0, num) + "..."
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))

// or

function truncateString(str, num) {
  return str.length <= num ? str : str.slice(0, num) + "..."
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))


// FFC Finders Keepers

function findElement(arr, func) {
  return arr.find(func)
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))

// or

function findElement(arr, func) {
  return arr.filter(func)[0]
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))

// or


function findElement(arr, func) {
  let num = 0
  for (let i = 0; i < arr.length; i++) {
    num = arr[i]
    if (func(num)) {
      return num
    }
  }
  return undefined
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))


// FFC Boo who

function booWho(bool) {
  // check if bool is a boolean value
  if (bool === true || bool === false) {
    return true
  } else {
    return false
  }
}

console.log(booWho(null))

// or

function booWho(bool) {
  return typeof bool === 'boolean'
}

console.log(booWho(null))


// FFC Title Case a Sentence

function titleCase(str) {
  // given a str
  // return a new str with each word capitalized
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ")
}

console.log(titleCase("I'm a little tea pot"))

// or

function titleCase(str) {
  let titled = str.toLowerCase().split(" ")
  for (let i = 0; i < titled.length; i++) {
    titled[i] = titled[i][0].toUpperCase() + titled[i].slice(1)
  }
  return titled.join(" ")
}

console.log(titleCase("I'm a little tea pot"))


// FFC Slice and Splice