// FFC Where do I belong

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a, b) => a - b)
  return arr.indexOf(num)
}

console.log(getIndexToIns([40, 60], 50))

// or

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    }
  }
}

console.log(getIndexToIns([40, 60], 50))  


// FFC Mutations

function mutation(arr) {
  // passed arr with two words 
  // return true if first element contains all letters of second elem
  // else return false

  let down = arr.map(word => word.toLowerCase())
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
  // passed arr with two words 
  // return true if first element contains all letters of second elem
  // else return false

  let down = arr.map(word => word.toLowerCase())
  for (let i = 0; i < down[1].length; i++) {
    if (!down[0].includes(down[1][i])) {
      return false
    }
  }
  return true
}   

console.log(mutation(["hello", "hey"]))

// or

function mutation(arr) {
  return arr[1].toLowerCase().split("").every(letter => arr[0].toLowerCase().includes(letter))
}

console.log(mutation(["hello", "hey"]))


// FFC Chunky Monkey

function chunkArrayInGroups(arr, size) {
  // passed arr and size (int)
  // split the arr into groups the length of size
  // return as nested array
  let newArr = []
  for (let i = 0; i < arr.length; i+=size) {
    newArr.push(arr.slice(i, size + i))
  }
  return newArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))

// or

function chunkArrayInGroups(arr, size) {
  let newArr = []
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size))
  }
  return newArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))

