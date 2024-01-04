// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

  // let pairs = [[1, 3], [8, 9], [2, 16]]
  // let pairs_object = {}
  // let i = 0
  // while (i < pairs.length) {
  //   let key = pairs[i][0]
  //   let value = pairs[i][1]
  //   pairs_object[key] = value
  //   i++
  // }
  // console.log(pairs_object)

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

  // let items = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] 
  // let itemsHash = {}
  // let i = 0
  // while (i < items.length) {
  //   let item = items[i]
  //   itemsHash[item["id"]] = item
  //   i++
  // }
  // console.log(itemsHash)

// Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

  // let word = "magnanimous"
  // let letterCounter = {}
  // let i = 0
  // while (i < word.length) {
  //   let letter = word[i]
  //   if (letterCounter[letter] === undefined) {
  //     letterCounter[letter] = 0
  //   }
  //   letterCounter[letter]++
  //   i++
  // }
  // console.log(letterCounter)

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

let items = {"chair": 100, "book": 14}
let itemsArray = Object.entries(items)

console.log(itemsArray)



