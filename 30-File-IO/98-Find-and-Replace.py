def find_and_replace(file_name, search_word, replace_word):
	with open(file_name, 'r+') as file:
		text = file.read()
		new_text = text.replace(search_word, replace_word)
		file.seek(0)
		file.write(new_text)