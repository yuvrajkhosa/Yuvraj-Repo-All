import math
base = 2
binaryNum = input("please input your number in binary: ")
total = 0
for i in range(len(binaryNum)):
 total += int((math.pow(base ** i,int(binaryNum[-1-i])) * int(binaryNum[-1-i])))
print(total)
#Two Liner Version
bNum = input("Input Binary Number: ")
print(sum(list(map(lambda x: 2 ** x,[i for i in range(len(bNum)) if( int((math.pow(2 ** i,int(bNum[-i - 1])) * int(bNum[-i-1])))) > 0 ]))))

  
input("Press any key to exit")




