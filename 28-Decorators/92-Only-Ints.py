from functools import wraps

def only_ints(fn):
	@wraps(fn)
	def wrapper(*args, **kwargs):
		if all(type(arg) == int for arg in args):
			return fn(*args, **kwargs)
		return "Please only invoke with integers."
	return wrapper


nums = [1, 2, 3, 4]
print([type(arg) for arg in nums])

n = 1
print(type(n) == int)
print(int)