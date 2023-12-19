// Start with an array of numbers and create a new array with each number times 3.

// let numbers = [1, 2, 3]

// WHILE
// let tripled_numbers = []
// let i = 0
// while (i < numbers.length) {
//   let number = numbers[i]
//   tripled_numbers.push(number * 3)
//   i++
// }
// console.log(tripled_numbers)

// ForEach
// numbers.forEach((number) => tripled_numbers.push(number * 3))
// console.log(tripled_numbers)

// numbers.forEach(function(number) {
//   tripled_numbers.push(number * 3)
// })
// console.log(tripled_numbers)

// MAP
// let tripled_numbers = numbers.map(number => number * 3)
// console.log(tripled_numbers)

// Start with an array of strings and create a new array with each string upcased.

// let words = ["hello", "goodbye"]
// let upcasedWords = []

// WHILE
// let i = 0
// while (i < words.length) {
//   let word = words[i]
//   upcasedWords.push(word.toUpperCase())
//   i++
// }
// console.log(upcasedWords)

// ForEACH
// words.forEach((word) => upcasedWords.push(word.toUpperCase()))
// console.log(upcasedWords)

// MAP

// let upcasedWords = words.map(
//   word => word.toUpperCase()
// )
// console.log(upcasedWords)

// Start with an array of hashes and create a new array of string values from each hash's :name key.

let people = [
  {name: "Alice", age: 27},
  {name: "Blane", age: 16}
]
// let names = []
// WHILE
// let i = 0 
// while (i < people.length) {
//   names.push(people[i]["name"])
//   i++
// }
// console.log(names)

// ForEach

// people.forEach(person => {
//   names.push(person["name"])
// })
// console.log(names)

// MAP

// let names = people.map(person => person.name) 
// console.log(names)

// Start with an array of numbers and create a new array with each number plus 7.

let numbers = [1, 2, 3]
// let plusSeven = []

// WHILE
// let i = 0
// while (i < numbers.length) {
//   let number = numbers[i]
//   plusSeven.push(number + 7)
//   i++
// }
// console.log(plusSeven)

// ForEach
// numbers.forEach(number => plusSeven.push(number + 7))
// console.log(plusSeven)

// MAP
// let plusSeven = numbers.map(number => number + 7)
// console.log(plusSeven)


// Start with an array of strings and create a new array with each string's length.
// For example, ["hello", "goodbye"] becomes [5, 7].

// let words = ["hello", "goodbye"]
// let wordLength = []

    // WHILE
// let i = 0
// while (i < words.length) {
//   let word = words[i]
//   wordLength.push(word.length)
//   i++
// }
// console.log(wordLength)  

// ForEach  
// words.forEach(word => wordLength.push(word.length))
// console.log(wordLength)

// MAP
// let wordLength = words.map(word => word.length)
// console.log(wordLength)


