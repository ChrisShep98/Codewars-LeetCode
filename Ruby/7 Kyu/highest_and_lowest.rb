# In this little assignment you are given a string of space separated numbers, 
# and have to return the highest and lowest number.

# Examples
# Input: "1 2 3 4 5"   =>  Output: "5 1"
# Input: "1 2 -3 4 5"  =>  Output: "5 -3"
# Input: "1 9 3 4 -5"  =>  Output: "9 -5"

# Notes
# All numbers are valid Int32, no need to validate them.
# There will always be at least one number in the input string.
# Output string must be two numbers separated by a single space, and highest number is first.



# def high_and_low(numbers)
#   int_array = numbers.split(' ').map{|el| el.to_i}
#   highest = int_array.max
#   lowest = int_array.min
#   return [highest, lowest].join(" ")
# end

def high_and_low(numbers)
  int_array = numbers.split.map{|el| el.to_i}
  "#{int_array.max} #{int_array.min}"
end


puts "#{high_and_low("1 2 3 4 5")} -> 5 1"
puts "#{high_and_low("1 2 -3 4 5")} -> 5 -3"
puts "#{high_and_low("1 9 3 4 -5")} -> 9 -5"

