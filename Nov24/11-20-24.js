// Finders Keepers

// function findElement(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i]) === true) {
//       return arr[i]
//     }
//   }
// }

  // or
  const findElement = (arr, func) => {
    return arr.find(e => func(e))
  }

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))


// Boo who

function booWho(bool) {
  return typeof bool === "boolean"
}

console.log(booWho(null))


// Title Case a Sentence

// function titleCase(str) {
//   return str.split(" ").map(word => word[0].toUpperCase() + word.toLowerCase().slice(1)).join(" ")
// }

  //or

  function titleCase(str) {
    let arr = str.split(" ")
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i][0].toUpperCase() + arr[i].toLowerCase().slice(1)) 
    }
    return newArr.join(" ")
  }

console.log(titleCase("I'm a little tea pot"))


// Slice and Splice
  // insert elems of arr1 into arr2 at n index

// function frankenSplice(arr1, arr2, n) {
//   let copy = arr2.slice()
//   copy.splice(n, 0, ...arr1)
//   return copy

//  // can't have return copy.splice(...) bc splice returns an array of the removed items so if no items were removed, it returns an empty array
// }

  // or

  function frankenSplice(arr1, arr2, n) {
    let copy = arr2.slice()

    for (let i = 0; i < arr1.length; i++) {
      copy.splice(n, 0, arr1[i])  // insert arr1[i] into copy at index n
      n++ // increment n so that the next elem in arr1 is inserted
    }
    return copy
  }

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)) // return [4,5,1,2,3,6]


// Falsy Bouncer

function bouncer(arr) {
  return arr.filter(Boolean)
}

console.log(bouncer([7, "ate", "", false, 9]))


// Where do I Belong

function getIndexToIns(arr, num) {
  // return lowest index where num should be inserted into the arr (when sorted)

  arr.push(num)
  arr.sort((a, b) => a - b)
  // return arr.indexOf(num)
  // or
  for  (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    }
  }
}

console.log(getIndexToIns([40, 60], 50))


// Mutations

function mutation(arr) {
  // return true if str in arr[0] contains all letters of str in arr[1]
  let downcased = arr.map(word => word.toLowerCase())

  for (let i = 0; i < downcased[1].length; i++) {
    if (downcased[0].indexOf(downcased[1][i]) < 0) {
      return false
    }
  }
  return true
}

console.log(mutation(["hello", "Hey"]))


// Chunky Monkey

function chunkArrayInGroups(arr, size) {
  // split arr into groups of length "size"

  let split = []
  for (let i = 0; i < arr.length; i += size) { // increment by size
    split.push(arr.slice(i, i + size)) // slice from i to i + size
  }
  return split
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))