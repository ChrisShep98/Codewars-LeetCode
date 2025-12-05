# Simple, given a string of words, return the length of the shortest word(s).
# String will never be empty and you do not need to account for different data types.





def find_short(s)
s.split(" ").map { |char| char.length}.min 
end


puts "#{find_short("bitcoin take over the world maybe who knows perhaps")} -> 3"
puts "#{find_short("i want to travel the world writing code one day")} -> 1"
puts "#{find_short("Let's travel abroad shall we")} -> 2"
