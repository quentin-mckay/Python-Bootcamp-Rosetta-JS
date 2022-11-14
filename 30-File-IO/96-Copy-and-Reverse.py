def copy(file_name, new_file_name):
	with open(file_name) as file:
		text = file.read()
		
	with open(new_file_name, 'w') as file:
		file.write(text[::-1])
