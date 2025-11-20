# Write a function that checks if a given string (case insensitive) is a palindrome.

# A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


def is_palindrome str
  str.downcase.reverse == str.downcase
end

puts is_palindrome("madam") # true
puts is_palindrome("racecar") # true
puts is_palindrome("RaCECAr") # true
puts is_palindrome("Chris") # false

