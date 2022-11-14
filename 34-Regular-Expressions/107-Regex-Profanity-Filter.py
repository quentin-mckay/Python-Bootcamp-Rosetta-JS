import re

def censor(string):
	regex = re.compile(r'\bfrack[a-z]*', re.I)
	return regex.sub('CENSORED', string)


s = 'Frack you'

print(censor(s))