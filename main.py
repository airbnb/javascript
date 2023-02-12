num1 = int(input())
num2 = int(input())
choice = input()

variations = {'+': num1 + num2, '-': num1 - num2, '*': num1 * num2, '/': num1 / num2}

if choice in variations.keys():
	print(variations[choice])
else:
	print("Недопустимая операция")
