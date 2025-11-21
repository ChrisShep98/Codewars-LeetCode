# function findOdd(A) {
#   var obj = {};
#   A.forEach(function(el){
#     obj[el] ? obj[el]++ : obj[el] = 1;
#   });
  
#   for(prop in obj) {
#     if(obj[prop] % 2 !== 0) return Number(prop);
#   }
# }


# create a empty hashmap
# loop through array and add to hashmap key being the array element and value being the number of times it shows up
# loop through the hashmap and find the value that is odd by using %

def find_it(seq)
  hash = {}

  seq.each do |item|
    hash[item] ? hash[item] += 1 : hash[item] = 1 
  end
  
  hash.each do |key, value|
    if value % 2 == 1
      return key
    end
  end
end

puts "#{find_it([7])} -> 7"
puts "#{find_it([0])} -> 0"
puts "#{find_it([1,1,2])} -> 2"
puts "#{find_it([0,1,0,1,0])} -> 0"
puts "#{find_it([1,2,2,3,3,3,4,3,3,3,2,2,1])} -> 4"
