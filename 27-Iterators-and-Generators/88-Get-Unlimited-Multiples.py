def get_unlimited_multiples(num=1):
	count = 1
	while True:
		yield num * count
		count += 1