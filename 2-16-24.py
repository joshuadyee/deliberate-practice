# Loops 2


# Start with an array of numbers and create a new array with each number times 3.
# For example, [1, 2, 3] becomes [3, 6, 9].

numbers = [1, 2, 3]

tripled_numbers = []
i = 0
while i < len(numbers):
  num = numbers[i]
  tripled_numbers.append(num * 3)
  i += 1

print(tripled_numbers)

# tripled_numbers = [number * 3 for number in numbers]
# print(tripled_numbers)

# Start with an array of strings and create a new array with each string upcased.
# For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

words = ["hello", "goodbye"]

# upcased_words = [word.upper() for word in words]
# print(upcased_words)

upcased_words = []
i = 0
while i < len(words):
  word = words[i]
  upcased_words.append(word.upper())
  i += 1

print(upcased_words)