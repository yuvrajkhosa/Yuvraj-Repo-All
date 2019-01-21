import itertools
morse = {
  'A': '.-',     'B': '-...',   'C': '-.-.', 
  'D': '-..',    'E': '.',      'F': '..-.',
  'G': '--.',    'H': '....',   'I': '..',
  'J': '.---',   'K': '-.-',    'L': '.-..',
  'M': '--',     'N': '-.',     'O': '---',
  'P': '.--.',   'Q': '--.-',   'R': '.-.',
  'S': '...',    'T': '-',      'U': '..-',
  'V': '...-',   'W': '.--',    'X': '-..-',
  'Y': '-.--',   'Z': '--..',
  
  '0': '-----',  '1': '.----',  '2': '..---',
  '3': '...--',  '4': '....-',  '5': '.....',
  '6': '-....',  '7': '--...',  '8': '---..',
  '9': '----.', ' ': '' 
}
morse = dict(zip(morse.values(), morse.keys()))
def decodeMorse(m):
  m = m.split(" ")
  
  word = []
  i = 0
  while (i < len(m)):

    if (m[i] == ""):
      
      word.append(" ")
      i += 2
    else:
     word.append(morse[m[i]])
     i += 1
  return("".join(word))
print(decodeMorse('.... . -.--   .--- ..- -.. .'))

input("Press any key to exit")