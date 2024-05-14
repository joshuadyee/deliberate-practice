// FFC Finders Keepers

function findElement(arr, func) {
  // given arr and a func
  // pass the arr through the func
  // return the first elem that is passed as true
  // if no elem passes, return undefined
  return arr.find(func)

  // or

  // return arr.filter(func)[0]
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))

// or

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i]
    }
  }
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))



// FFC Boo who

function booWho(bool) {
  return typeof bool === "boolean"
}

console.log(booWho(null))

// or

function booWho(bool) {
  return bool === true || bool === false
}

console.log(booWho(null))


// FFC Title Case a Sentence

function titleCase(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}

console.log(titleCase("I'm a little tea pot"))

// or

function titleCase(str) {
  let arr = str.toLowerCase().split(" ")
  let newArr = arr.map(word => word[0].toUpperCase() + word.slice(1))
  return newArr.join(" ")
}

console.log(titleCase("I'm a little tea pot"))


// FFC Slice and Splice

function frankenSplice(arr1, arr2, n) {
  // given 2 arrs and an n index
  // copy all elems of arr1 into arr2 at n index
  // og arrays should remain unchanged
  let combined = arr2.slice(0)
  for (let i = 0; i < arr1.length; i++) {
    combined.splice(n, 0, arr1[i])
    n++
  }
  return combined
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

// or

function frankenSplice(arr1, arr2, n) {
  let combined = arr2.slice(0)
  combined.splice(n, 0, ...arr1)
  return combined
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))


// FFC Falsy Bouncer

function bouncer(arr) {
  // given arr
  // remove falsy values from arr
  // return newArr, don't change og arr
  return arr.filter(elem => Boolean(elem))  // or arr.filter(Boolean)
}

console.log(bouncer([7, "ate", "", false, 9]))

// or

function bouncer(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(bouncer([7, "ate", "", false, 9]))


// FFC Where do I Belong 

function getIndexToIns(arr, num) {
  // given arr and a num
  // push num into arr
  // sort arr
  // return lowest index at which the num would be input
  arr.push(num)
  arr.sort((a,b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    }
  }  
}

console.log(getIndexToIns([40, 60], 50))

// or

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a,b) => a - b)
  return arr.indexOf(num)
}

console.log(getIndexToIns([40, 60], 50))


// FFC Mutations

function mutation(arr) {
  // given arr with 2 elems
  // if first elem contains all letters of second elem, return true
  let down = arr.map(str => str.toLowerCase())
  for (let i = 0; i < down[1].length; i++) {
    if (down[0].indexOf(down[1][i]) < 0) {
      return false
    }
  }
  return true 
}

console.log(mutation(["hello", "hey"]))

// or

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(letter => arr[0].toLowerCase().indexOf(letter) !== -1)
}

console.log(mutation(["hello", "hey"]))


// FFC Chunky Monkey

function chunkArrayInGroups(arr, size) {
  // given an arr and size (int)
  // group arr into sub arrays of size length
  // console.log(arr.slice(0, size))
  // console.log(arr.slice(size, size + size))
  let newArr = []
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size))
  }
  return newArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))

// or

function chunkArrayInGroups(arr, size) {
  let newArr = []
  while (arr.length) {  
    newArr.push(arr.splice(0, size))  
  }
  return newArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))