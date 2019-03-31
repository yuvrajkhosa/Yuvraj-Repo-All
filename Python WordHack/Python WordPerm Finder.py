# import itertools
# import enchant
# import re
# from itertools import chain
# d = enchant.Dict("en_US")
# w = "yuvrajs"
# arr = list(w)
# counter = len(arr)
# vowels = ["a","e","i","o","u"]
# lst = []
# word = []
# for i in range(counter,-1,-1):
# 	if(counter == 2):
# 		break
# 	x = list(itertools.permutations(arr,i))
#
# 	lst.append(x)
# 	counter -= 1
#
#
#
# lst = list(chain.from_iterable(lst))
# for l in range(len(lst)):
# 	lst[l] = ','.join(lst[l])
# 	lst[l] = re.sub(",","",lst[l])
#
# 	if (d.check(lst[l])):
# 		word.append(lst[l])
# print(word)
import itertools
import enchant
import re
from itertools import chain
def f(word):
	d = enchant.Dict("en_US")
	w = word
	arr = list(w)
	counter = len(arr)
	vowels = ["a", "e", "i", "o", "u"]
	lst = []
	word = []
	for i in range(counter,-1,-1):
		if(counter == 2):
			break
		x = list(itertools.permutations(arr,i))
		for p in x:
			s = ','.join(p)
			if any(char in vowels for char in s):
				if any(same in s for same in lst) == False:
					lst.append(s)
		counter -= 1




	for l in range(len(lst)):

		lst[l] = re.sub(",","",lst[l])

		if (d.check(lst[l])):
			word.append(lst[l])

	print(word)
while True:
	temp = input("Input Word: ")
	f(temp)
