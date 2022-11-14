def get_multiples(number=1, num_multiples=10):
	count = 1
	while count <= num_multiples:
		yield number * count
		count += 1
