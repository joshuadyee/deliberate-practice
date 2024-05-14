# Start with an array of numbers and create a new array with each number times 3.
# For example, [1, 2, 3] becomes [3, 6, 9].


numbers = [2, 4, 6, 8]

tripled_numbers = []
i = 0 
while i < numbers.length
  number = numbers[i] 
  tripled_numbers << number * 3
  i += 1
end
pp tripled_numbers


tripled_numbers = []
numbers.each do |number| 
  tripled_numbers << number * 3
end
pp tripled_numbers

tripled_numbers = numbers.map { |number| number * 3}
pp tripled_numbers
