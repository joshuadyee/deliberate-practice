// Write a method that takes in a number and returns the number times two. Then run the method and print the result.

// function doubler(num) {
//   return num * 2
// }
// console.log(doubler(4))

const doubler = num => num * 2
console.log(doubler(4))

// Write a method that takes in a string and returns the string with all capital letters. Then run the method and print the result.

// function allCaps(str) {
//   return str.toUpperCase()
// }
// console.log(allCaps("hello"))

const allCaps = str => str.toUpperCase()
console.log(allCaps("hello"))


// Write a method that takes in two numbers and returns the first number subtracted by the second. Then run the method and print the result.

const getSubtracted = (num1, num2) => num2 - num1
console.log(getSubtracted(17, 35))

// Write a method that takes in a number and returns the number times itself. Then run the method and print the result.

const square = num => num * num
console.log(square(3))

// Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

function firstLetter(string) {
  return string[0]
}
console.log(firstLetter("aisdhfkjh"))

// Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

const combineStrings = (str1, str2, str3) => str1 + " " + str2 + " " + str3 + " "
console.log(combineStrings("I", "am", "him"))

// Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

const stringify = number => number.toString
console.log(8)

// Write a method that takes in a string and returns the string repeated 5 times. Then run the method and print the result.

function repeater(str) {
  return str.repeat(5)
}
console.log(repeater("ha"))

// Write a method that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the method and print the result.

const average = (num1, num2, num3) => (num1 + num2 + num3) / 3
console.log(average(3,56,7))

// Write a method that takes in a number and returns the number times 10 plus 30. Then run the method and print the result.

const arithmetic = num => num * 10 + 30
console.log(arithmetic(10))
