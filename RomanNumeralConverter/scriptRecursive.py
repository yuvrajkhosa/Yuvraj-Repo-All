while (True):
  try:
    decNum = int(input("Please input a number: "))
  except:
      print("Number is invalid")
      continue
  numeral = []
  currentNum = 0
  romanNums = {1:"I",2:"II",3:"III",4:"IV",5:"V",9:"IX",10:"X",40:"XL",50:"L",90:"XC",100:"C",400:"CD",500:"D",900:"CM",1000:"M"}
  nextNum = [0]
  def convert(num):
     # print("ONCE")
      if (num in romanNums):
          numeral.append(romanNums[num])
          print(f'The number {decNum} in Romal Numerals is: "{"".join(numeral)}"')
          return
      getDigit = max([i for i in romanNums if (num - i > 0)])
      numeral.append(romanNums[getDigit])
      subtraction = num - getDigit
      
      convert(subtraction)
      
  convert(decNum)

