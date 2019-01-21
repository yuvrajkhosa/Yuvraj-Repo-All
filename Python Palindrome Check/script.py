import re
def isPal(word):
  if (len(word) == 0):#Use 0 because sometimes the two digits are the same and the first and last digit makes it to a string with nothing. eg. (hannah, maddam). it would end up like 'dd' and the first and last character would be removed and recured. So just make it 0.
    print("Is a palindrome!")
    return(True)
  if (word[len(word)-1] == word[0]):
    return(isPal(word[1:-1]))
  print("Not a Palindrome!")
  return(False)

def checkWord(word):
  word = re.sub(r'[^\w]',"",word)
  word = word.lower()
  return(isPal(word))
checkWord(input("Input word: "))
input("Press any key to exit")



