// Spinal Tap Case - FFC

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap")); // this-is-spinal-tap


// Search and Replace - FFC

function myReplace(str, before, after) {
  // iterate through the str (change to an array)
  // replace the "before" word with the "after" word

  let arr = str.split(" ")
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === before) {
      // console.log(arr[i])
      if (arr[i][0] === arr[i][0].toUpperCase()) {
        arr[i] = after[0].toUpperCase() + after.slice(1)
      } else if (arr[i][0] === arr[i][0].toLowerCase()) {
        arr[i] = after[0].toLowerCase() + after.slice(1)
      } else {
        arr[i] = after
      }
    }
  }
  return arr.join(" ")
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
console.log(myReplace("I think we should look up there", "up", "Down"))


// Can't have better time complexity since search and replace will always have to look through every element. Can be made to be more readable.