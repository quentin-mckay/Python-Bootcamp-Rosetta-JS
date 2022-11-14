from functools import wraps

def double_return(fn):
	@wraps(fn)
	def wrapper(*args, **kwargs):
		result = fn(*args, **kwargs)
		return [result, result]
	return wrapper


