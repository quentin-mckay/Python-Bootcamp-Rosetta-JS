import re

def parse_date(string):
	regex = re.compile(r'^(\d{2})[.,/](\d{2})[.,/](\d{4})$')
	match = regex.search(string)
	if match:
		return {
			'd': match.group(1),
			'm': match.group(2),
			'y': match.group(3)
		}
	return None

date = '12.03.2000'

info = parse_date(date)

print(info)