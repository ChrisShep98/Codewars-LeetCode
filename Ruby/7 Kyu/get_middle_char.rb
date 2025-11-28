# You are going to be given a non-empty string. 
# Your job is to return the middle character(s) of the string.

# If the string's length is odd, return the middle character.
# If the string's length is even, return the middle 2 characters.
# Examples:
# "test" --> "es"
# "testing" --> "t"
# "middle" --> "dd"
# "A" --> "A"


# check to see if the string length is even or odd (s.length % 2 == 0)
# if even

def get_middle(s)
  s.length % 2 == 0 ? s[s.length / 2 - 1 ] + s[s.length / 2] : s[s.length / 2]
end



puts "#{get_middle("test")} -> es"
puts "#{get_middle("testing")} -> t"
puts "#{get_middle("middle")} -> dd"
puts "#{get_middle("A")} -> A"
