def miniMaxSum(arr)
  # Write your code here
  # arr contains 5 integers
  # find min sum of 4 ints
  # find max sum of 4 ints
  # print min and max on one line separated by a space
  # sample input array [1,2,3,4,5] => output: 10 14
  
  # find the max number of the array
  # remove it and return the new array
  # find sum of remaining elements in new array (this would be the smaller/left-side output)
  # same thing with max number of original array
  max = arr[0]
  min_array = arr #make copy of array so delete doesn't mutate the og array
  min_array.each do |number|
    if number > max
      max = number
    end
  end
  min_array.delete(max)
#   p min_array
  smaller_sum = 0
  min_array.each do |num|
    smaller_sum += num
  end
  
  min = arr[0]
  max_array = arr
  max_array.each do |number|
    if number < min
      min = number
    end
  end
  # p min 
  max_array.delete(min)
  bigger_sum = 0
  max_array.each do |num|
    bigger_sum += num
  end
  # p bigger_sum
  p '#{smaller_sum}' 
end

miniMaxSum([1,2,3,4,5])