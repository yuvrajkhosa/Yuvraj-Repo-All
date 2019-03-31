import itertools
import enchant

import threading
import time
import re
from itertools import chain
threadsArr = []
def f(word):
	global threadsArr
	if (len(word) <= 3):
		print("Please pick a word more than 3 characters!!!")
		return

	t = time.time()
	d = enchant.Dict("en_US")
	word = word.lower()
	arr = list(word)

	vowels = ["a", "e", "i", "o", "u","y"]
	lst = []
	word = []

	def perm(index):
		print("STARTED FUNCTION: ",index)
		
		x = list(itertools.permutations(arr,index))
		
		print("Finsished Perms: ", index)
		for p in x:
			s = ','.join(p)
			if any(char in vowels for char in s):
				if any(same in s for same in lst) == False:
					lst.append(s)
	
	for l in range(len(arr) ,2,-1):
		try:
			thread = threading.Thread(target=perm, args=(l,))
		except:
			print("Can't Create Thread")
		threadsArr.append(thread)
	
	for thr in threadsArr:
		
		thr.start()
		
		#print(thr.isAlive)
		
	for thr in threadsArr:
		thr.join(timeout = 0.1)
		

	for l in range(len(lst)):

		lst[l] = re.sub(",","",lst[l])

		if (d.check(lst[l])):
			word.append(lst[l])
	print("Amount of words",len(word),"\n")
	print(word)
	print("\nIt took: ",round(time.time() - t,3), "seconds!!!")
	
	
	threadsArr = []

while True:
	temp = input("Input Word: ")
	f(temp)
