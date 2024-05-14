# Staircase HR

def staircase(n)
  # Write your code here
  # n is the size of the staircase
  # combo of spaces and #s

  i = 0
  while i < n
    print " " * (n - i - 1)
    print "#" * (i + 1)
    puts
    i += 1
  end

end

p staircase(8)