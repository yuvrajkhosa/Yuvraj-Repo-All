maxNumber = int(input("Input maximum number for triples: "))
print([(x, y, z) for x in range(1, maxNumber) for y in range(x, maxNumber) for z in range(x, maxNumber) if x**2 + y**2 == z**2])
input("Press any key to exit: ")
