nums = [3, 4, 5, 3, 4]

i = 0
sum = 0
while i < nums.length
  num = nums[i] 
  sum += num
  i += 1
end

sum = 0
nums.each do |num|
  sum += num
end

p nums.select { |num| num < 4 }

