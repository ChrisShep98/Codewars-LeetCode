# Fake Binary
# Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
# Note: input will never be an empty string

# function fakeBin(x) {
#   return x.split('').map(n => n < 5 ? 0 : 1).join('');
# }

def fake_bin(x):
    myArray = list(x)
    result = []
    for x in myArray:
      if int(x) < 5:
         result.append('0')
      elif int(x) >= 5:
         result.append('1')
    return ''.join(result)
          
