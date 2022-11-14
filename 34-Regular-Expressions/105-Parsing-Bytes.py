import re

def parse_bytes(string):
	reg = re.compile(r'\b[01]{8}\b')
	return reg.findall(string)