# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

def even_or_odd(number)

  if number.even?
    "Even"
  else 
    "Odd"
  end

end

puts "#{even_or_odd(5)} -> Odd"
puts "#{even_or_odd(3)} -> Even"
puts "#{even_or_odd(7)} -> Odd"
