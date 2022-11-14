def copy(file_name, new_file_name):
	with open(file_name) as file:
		data = file.read()

	with open(new_file_name, 'w') as file:
		file.write(data)

copy('story.txt', 'asdf.txt')