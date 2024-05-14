# Create an array to store 3 words. Then add two more words to the array and print the array on one line.

words = ["Eren", "Armin", "Mikasa"]
words.push("Conny", "Jean")
p words

# Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

letters = ["a", "b", "c", "d"]
letters[1] = 7
p letters

# Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

numbers = [3, 4, 5, 8, 9]
i = 0 
while i < numbers.length
	number = numbers[i]
	puts number
  i += 1
end

# Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

number = [5]
number.push(7, 8, 9)
p number

# Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

words = ["hammer", "cart", "armor"]
words[2] = words[2].upcase
p words
