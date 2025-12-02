# An isogram is a word that has no repeating letters, consecutive or non-consecutive.
# Implement a function that determines whether a string that contains only letters is an isogram.
# Assume the empty string is an isogram. Ignore letter case.

# Example: (Input --> Output)
# "Dermatoglyphics" --> true
# "aba" --> false
# "moOse" --> false (ignore letter case)

def is_isogram(string)
  my_hash = Hash.new(0)
  my_other_hash = {}
  lowercase_string = string.downcase
  lowercase_string.each_char do |char|
    my_hash[char] += 1
    return false if my_hash[char] > 1
  end
  true
end

puts "#{is_isogram('Dermatoglyphics')} --> true"
puts "#{is_isogram('aba')} --> false"
puts "#{is_isogram('moOse')} --> false"
