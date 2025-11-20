# In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
# Examples
# makeNegative(1);  # return -1
# makeNegative(-5); # return -5
# makeNegative(0);  # return 0



def make_negative(num)
  if num < 0
    return num
  end
  -num
end

puts "#{make_negative(1)}, -1"
puts "#{make_negative(-5)}, -5"
puts "#{make_negative(0)}, 0"

