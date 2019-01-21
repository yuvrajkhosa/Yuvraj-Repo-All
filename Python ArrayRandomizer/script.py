import random
names = ["Liam","Noah","William","James","Logan","Benjamin","Mason","Elijah","Oliver","Jacob","Lucas","Michael","Alexander"]
def randomizeNames(arr):
	for i in range(len(arr) - 1, -1, -1):
		rand = random.randint(0, i + 1)
		temp = arr[i]
		arr[i] = arr[rand]
		arr[rand] = temp
	return(arr)

print(randomizeNames(names))
input("Press any key to exit")