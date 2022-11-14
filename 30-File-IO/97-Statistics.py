def statistics(file_name):
	with open(file_name) as file:
		lines = file.readlines()
		text = ''.join(lines)

		stats = {
			'lines': len(lines),
			'words': len(text.split()),
			'characters': len(text)
		}

		return stats
