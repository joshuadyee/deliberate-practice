# 2/20/23

def mini_max_sum(arr)
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
  min_sum_array = arr.clone #make copy of array so delete doesn't mutate the og array
  max_sum_array = arr.clone

  min_sum_array.each do |number|
    if number > max
      max = number
    end
  end

  min_sum_array.delete(max)
  p min_sum_array
  smaller_sum = 0
  min_sum_array.each do |num|
    smaller_sum += num
  end
  p smaller_sum

  min = arr[0]
  max_sum_array.each do |number|
    if number < min
      min = number
    end
  end

  max_sum_array.delete(min)
  # p max_sum_array
  bigger_sum = 0
  max_sum_array.each do |num|
    bigger_sum += num
  end
  # p bigger_sum

  puts "#{smaller_sum} #{bigger_sum}"
end

mini_max_sum([1,2,3,4,5])

#correct solution unless all numbers are the same (2/23/24)

##################################################

# Time Conversion (2/20/24)

s = "07:05:45PM"
period = s[-2..-1]
time = s[0...-2]
p period
p time

time_segments = time.split(":")
hour = time_segments[0]
minutes = time_segments[1]
seconds = time_segments[2]
puts "#{hour}:#{minutes}:#{seconds}"



def time_conversion(s)
  period = s[-2..-1]
  time = s[0...-2]
  
  time_segments = time.split(":")
  hour = time_segments[0]
  minutes = time_segments[1]
  seconds = time_segments[2]
  
  if period == "AM"
    if hour == "12"
      hour = "00"
    end
  else
    # PM case
    if hour == "12"
      hour
    else
      hour = hour.to_i + 12
    end
  end
  puts "#{hour}:#{minutes}:#{seconds}"
end

time_conversion("07:05:45PM")

##################################################

# Grading Students (2/23/24)

grade = (0...100) #grades allowed

# if grade < 40
#   grade = "failing"
# end

grade = 84
# p grade % 5

# grades = [71, 72, 83, 98, 35]

def grading_students(grades)
  rounded_grades = []

  grades.each do |grade|
    if grade >= 38
      if grade % 5 == 3
        grade += 2
      elsif grade % 5 == 4
        grade += 1
      end
    else 
      grade
    end
    rounded_grades << grade
  end
  return rounded_grades
end

p grading_students([71, 72, 83, 98, 35])

##################################################


# Apple and Orange

