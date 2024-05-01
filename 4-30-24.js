// FFC Where Do I Belong

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a,b) => a - b)
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    }
  }
}

console.log(getIndexToIns([3, 4, 5, 1, 6], 2))


// FFC Mutations

function mutation(arr) {
  let first = arr[0].toLowerCase()
  let second = arr[1].toLowerCase()
  for (let i = 0; i < second.length; i++) { // loop through the second word
    if (first.indexOf(second[i]) === -1) { // if the first word does not contain the letter of the second word
      return false
    }
  }
  return true
}

console.log(mutation(["hello", "hey"]))



