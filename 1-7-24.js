// Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

let words = ["do", "or", "do", "not"]
let wordCounter = {}
// let i = 0
while (i < words.length) {
  let word = words[i]
  if (wordCounter[word] === undefined) {
    wordCounter[word] = 0
  } 
  wordCounter[word]++
  i++
}
console.log(wordCounter)

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

let hash = {"a": 1, "b": 2, "c": 3, "d": 4}
let flattenedArray = []
Object.entries(hash).forEach(([key, value]) => {
  flattenedArray.push(key)
  flattenedArray.push(value)
})
// console.log(Object.entries(hash))
console.log(flattenedArray)


// Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.



// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.


// Given a hash, create a new hash that has the keys and values switched.
// For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.

