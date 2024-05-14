// Start with an array of numbers and compute the sum of all the numbers.

// let nums = [5, 10, 8, 3]
// let sum = 0

// WHILE
// let i = 0
// while (i < nums.length) {
//   let num = nums[i]
//   sum += num
//   i++
// }
// console.log(sum)

// ForEach
// nums.forEach(num => sum += num)
// console.log(sum)

// REDUCE
// let sum = nums.reduce(
//   (sum, num) => sum + num
// )
// console.log(sum)


// Start with an array of strings and combine them all into a single string.

// let sports = ["volleyball", "basketball", "badminton"]
// let combined = ""

// WHILE
// let i = 0
// while (i < sports.length) {
//   combined += sports[i]
//   i++
// }
// console.log(combined)

// ForEach
// sports.forEach(sport => combined += sport)
// console.log(combined)

// REDUCE
// let combined = sports.reduce(
//   (combined, sport) => combined + sport
// )
// console.log(combined)


// Start with an array of hashes and compute the sum of the prices (from the :price key).

// let items = [
//   {name: "chair", price: 100},
//   {name: "pencil", price: 1},
//   {name: "book", price: 4},
//   {name: "eraser", price: 6}
// ]
// let total = 0

// WHILE
// let i = 0
// while (i < items.length) {
//   let item = items[i]
//   total += item["price"]
//   i++
// }
// console.log(total)

// ForEach
// items.forEach(item => total += item["price"])
// console.log(total)

// REDUCE
// let total = items.reduce(
//   (total, item) => total + item["price"], 0
// )
// console.log(total)


// Start with an array of numbers and compute the the minumum number.

// let numbers = [5, 10, 8, 3, 9]
// let min = numbers[0]

// WHILE 
// let i = 0
// while (i < numbers.length) {
//   let number = numbers[i]
//   if (number < min) {
//     min = number
//   } i++
// }
// console.log(min)

// ForEach
// numbers.forEach(number => {
//   if (number < min) {
//     min = number
//   }
// })
// console.log(min)

// REDUCE
// let min = numbers.reduce((min, number) => {
//   if (number < min) {
//     return number
//   } else {
//     return min
//   }
// })
// console.log(min)


// Start with an array of strings and compute the total length of all the strings.

// let sports = ["volleyball", "basketball", "badminton"]
// let letterCount = 0

// WHILE
// let i = 0
// while (i < sports.length) {
//   let sport = sports[i]
//   letterCount += sport.length
//   i++
// }
// console.log(letterCount)

// ForEach
// sports.forEach(sport => letterCount += sport.length)
// console.log(letterCount)

// REDUCE
// let letterCount = sports.reduce((letterCount, sport) => letterCount + sport.length, 0)
// console.log(letterCount)


// Start with an array of hashes and find the hash with the lowest price (from the :price key).

// let items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}, {name: "eraser", price: 6}]
// let cheapestItem = items[0]

// WHILE
// let i = 0
// while (i < items.length) {
//   let item = items[i]
//   if (item["price"] < cheapestItem["price"]) {
//     cheapestItem = item
//   } i++ 
// }
// console.log(cheapestItem)

// ForEach 
// items.forEach(item => {
//   if (item["price"] < cheapestItem["price"]) {
//     cheapestItem = item
//   }
// })
// console.log(cheapestItem)

//REDUCE
// let cheapestItem = items.reduce((cheapestItem, item) => {
//   if (item["price"] < cheapestItem["price"]) {
//     return item
//   } else {
//     return cheapestItem
//   }
// })
// console.log(cheapestItem)


// Start with an array of numbers and compute product of all the numbers.

// let numbers = [5, 10, 8, 3]
// let product = 1

// WHILE
// let i = 0
// while (i < numbers.length) {
//   product *= numbers[i]
//   i++
// }
// console.log(product)

// ForEach
// numbers.forEach(number => product *= number)
// console.log(product)

// REDUCE
// let product = numbers.reduce((product, number) => product * number)
// console.log(product)

// Start with an array of strings and combine them all into a single string, separated by dashes.

// let sports = ["volleyball", "basketball", "badminton"]
// let combinedSports = ""

// WHILE
// let i = 0
// while (i < sports.length) {
//   let sport = sports[i]
//   combinedSports += "-" + sport
//   i++
// }
// console.log(combinedSports)

// ForEach
// sports.forEach(sport => combinedSports += "-" + sport)
// console.log(combinedSports)

// REDUCE
// let combinedSports = sports.reduce((combined, elem) => combined + "-" + elem)
// console.log(combinedSports)


// Start with an array of hashes and find the hash with the shortest name (from the :name key).

// let items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}, {name: "eraser", price: 6}]
// let shortestName = items[0]

// WHILE
// let i = 0
// while (i < items.length) {
//   let item = items[i]
//   if (item["name"] < shortestName["name"]) {
//     shortestName = item
//   }
//   i++
// }
// console.log(shortestName)

// ForEach
// items.forEach(item => {
//   if (item["name"] < shortestName["name"]) {
//   shortestName = item
//   }
// })
// console.log(shortestName)

// REDUCE
// let shortestName = items.reduce((shorty, item) => {
//   if (item["name"] < shorty["name"]) {
//     return item
//   } else {
//     return shorty
//   }
// })
// console.log(shortestName)

// Start with an array of numbers and compute the maximum number.

let numbers = [5, 10, 8, 3]
// let max = numbers[0]

// WHILE
// let i = 0
// while (i < numbers.length) {
//   if (numbers[i] > max) {
//     max = numbers[i]
//   } 
//   i++
// } 
// console.log(max)

// ForEach
// numbers.forEach(number => {
//   if (number > max) {
//     max = number
//   }
// })
// console.log(max)

// REDUCE
let max = numbers.reduce((max, number) => {
  if (number > max) {
    return number
  } else {
    return max
  }
})
console.log(max)