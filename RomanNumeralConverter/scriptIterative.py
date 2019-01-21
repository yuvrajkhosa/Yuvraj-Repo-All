romanNums = {1:"I",2:"II",3:"III",4:"IV",5:"V",9:"IX",10:"X",40:"XL",50:"L",90:"XC",100:"C",400:"CD",500:"D",900:"CM",1000:"M"}
while (True):
  try:
    inputedNum = int(input("Please input a number: "))
  except:
      print("Number is invalid")
      continue
  numeral = []
  
  num = inputedNum
  while (True):
    if (num in romanNums):
        numeral.append(romanNums[num])
        print(f'The number {inputedNum} in Romal Numerals is: "{"".join(numeral)}"')
        break
    getDigit = max([i for i in romanNums if (num - i > 0)])
    numeral.append(romanNums[getDigit])
    subtraction = num - getDigit
    num = subtraction
    
input("Press any key to exit")