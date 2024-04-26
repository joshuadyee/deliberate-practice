// FFC Confirm the Ending

function confirmEnding(str, target) {
  // given a str (1st arg)
  // check if str ends with target string (2nd arg)
  let targetLength = target.length
  let ending = str.slice(-targetLength)
  // console.log(ending)
  return ending === target
}

console.log(confirmEnding("Bastian", "n"))


// FFC Repeat a String Repeat a String

function repeatAStringNumTimes(str, num) {
  // given a string and a number
  // repeat the string num times
  let repeatedString = ""
  for (let i = 0; i < num; i++) {
    repeatedString += str
  }
  return repeatedString
}

console.log(repeatAStringNumTimes("abc", 3))


// FFC Truncate a String

function truncateString(str, num) {
  if (num >= str.length) {
    return str
  } else {
    return str.slice(0,num) + "..."
  }     
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))


// FFC Finders Keepers

function findElement(arr, func) {
  // given an array and a function
  // return the first element in the array that passes the function
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (func(num)) {
      return num
    }
  }
  return undefined
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))


// FFC Boo who

function booWho(bool) {
  return typeof bool === "boolean"
}

console.log(booWho(null))


// FFC Title Case a Sentence


function titleCase(str) {
  let words = str.toLowerCase().split(" ")
  let titleCasedWords = words.map(word => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return titleCasedWords.join(" ")
}

console.log(titleCase("I'm a little tea pot"))


// FFC Slice and Splice

// given two arrays and a number
// copy each elemt of the first array into the second array starting at index n
// return the resulting array
// do not modify the original arrays

function frankenSplice(arr1, arr2, n) {
  let copy = arr2.slice()
  copy.splice(n, 0, ...arr1)
  return copy 
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

// or

function frankenSplice(arr1, arr2, n) {
  let copy = arr2.slice()
  for (let i = 0; i < arr1.length; i++) {
    copy.splice(n, 0, arr1[i])
    n++ // increment n so that the next element from arr1 is inserted at the next index
  }
  return copy
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))


// FFC Falsy Bouncer

function bouncer(arr) {
  return arr.filter(Boolean)
  // or
    // return let copy = arr.slice().filter(Boolean)
    // return copy
  // or
    // let copy = []
    // for (let i = 0; i < arr.length; i++) {
      // if (arr[i]) {
        // copy.push(arr[i])  
      // }  
    // }
    // return copy
}

console.log(bouncer([7, "ate", "", false, 9]))