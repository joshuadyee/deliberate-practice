// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

const pairs = [[1, 3], [8, 9], [2, 16]]

function pairArrToHash(arr) {
  const newObj = new Object()

  for (let pair of pairs) {
    newObj[pair[0]] = pair[1]
  }
  return newObj
}

console.log(pairArrToHash(pairs))

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

const items = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}]

function problemTwo(arr) {
  const itemsObj = {} 

  for (let item of items) {
    let id = item["id"]
    itemsObj[id] = item
  }
  return itemsObj
}

console.log(problemTwo(items))


// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

let string = "bookkeeper"

// const problemThree = (str) => {
//   const letterCount = {}
//   for (let letter of str) {
//     if (letterCount[letter] === undefined) {
//       letterCount[letter] = 0
//     } 
//     letterCount[letter]++
//   }
//   return letterCount
// }

const problemThree = (str) => {
  const letterCount = {}
  for (let letter of str) {
    letterCount[letter] = (letterCount[letter] || 0) + 1
  }
  return letterCount
}

console.log(problemThree(string))

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

const prices = {"chair": 100, "book": 14}

function problemFour(obj) {
  const arr = []
  for (const item in obj) {
    arr.push([item, obj[item]])
  }
  return arr
}

console.log(problemFour(prices))


// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321: {name: "Alice", age: 31}, 322: {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

const people = {321: {name: "Alice", age: 31}, 322: {name: "Maria", age: 27}}

function problemFive(obj) {
  let arr = []
  for (let key in obj) {
    obj[key]["id"] = key
    arr.push(obj[key])
  }
  return arr
}

console.log(problemFive(people))

// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do": 2, "or": 1, "not": 1}.

const words = ["do", "or", "do", "not"]

// function problemSix(arr) {
//   const wordCount = {}
//   for (let word of arr) {
//     wordCount[word] = (wordCount[word] || 0) + 1
//   }
//   return wordCount
// }

function problemSix(arr) {
  const wordCount = {}
  for (let word of arr) {
    // if word is undefined, set it's count to 0
    if (wordCount[word] === undefined) {
      wordCount[word] = 0
    } 
    // increment count of word
    wordCount[word]++
  }
  return wordCount
}

console.log(problemSix(words))

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

const hash = {"a": 1, "b": 2, "c": 3, "d": 4}

function problemSeven(obj) {
  const flatArr = []
  for (let key in obj) {
    flatArr.push(key, obj[key])
  }
  return flatArr
}

console.log(problemSeven(hash))

// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair": 75, "book": 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair": {price: 75, color: "red", weight: 10}, "book": {price: 15, color: "black", weight: 1}}.

const thingsHash = {"chair": 75, "book": 15} 
const thingsArr = [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}]
const combinedHash = {}

for (let thing of thingsArr) {
  const { name, color, weight } = thing
  const price = thingsHash[name]
  combinedHash[name] = {price, color, weight}
}

console.log(combinedHash)

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith": ["Bone", "RASL"], "George Orwell": ["1984"]}.

const books = [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}]

const bookCount = {}
for (let book of books) {
  const { author, title } = book
  if (bookCount[author] === undefined) {
    bookCount[author] = []
  }
  bookCount[author].push(title)
}

console.log(bookCount)

// Given a hash, create a new hash that has the keys and values switched.
// For example, {"a": 1, "b": 2, "c": 3} becomes {1: "a", 2: "b", 3: "c"}.

let obj = {"a": 1, "b": 2, "c": 3}
const reversedObj = {}

for (let key in obj) {
  reversedObj[obj[key]] = key
}
console.log(reversedObj)