# CUSTOM METHODS/CLASSES 1 (1-10)

# Write a method that takes in a number and returns the number times two. Then run the method and print the result.

def doubler(number):
  print(number * 2)

doubler(4)

# Write a method that takes in a string and returns the string with all capital letters. Then run the method and print the result.

def all_caps(str):
  print(str.upper())

all_caps("capital")

# Write a method that takes in two numbers and returns the first number subtracted by the second. Then run the method and print the result.

def difference(num1, num2):
  return (num2 - num1)

print(difference(4, 7))

# Write a method that takes in a number and returns the number times itself. Then run the method and print the result.

def squared(num):
  print(num * num)

squared(3)

# Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

def first_letter(str):
  print(str[0])

first_letter("letter")

# Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

def combined_str(str1, str2, str3):
  print(f"{str1} {str2} {str3}")

combined_str("I", "am", "him")

# Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

def stringify(num):
  return str(num)

print(stringify(8))

# Write a method that takes in a string and returns the string repeated 5 times. Then run the method and print the result.

def repeated_string(string):
  print(string * 5)

repeated_string("string")

# Write a method that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the method and print the result.

def average(num1, num2, num3):
  return (num1 + num2 + num3) / 3.0

print(average(12, 32, 23))

# Write a method that takes in a number and returns the number times 10 plus 30. Then run the method and print the result.

def arbitrary_method(num):
  return num * 10 + 30

print(arbitrary_method(2))