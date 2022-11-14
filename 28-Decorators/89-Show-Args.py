from functools import wraps

def show_args(fn):
	@wraps(fn)
	def wrapper(*args, **kwargs):
		print(f"Here are the args: {args}")
		print(f"Here are the kwargs: {kwargs}")
		return fn(*args, **kwargs)
	return wrapper

# @show_args
# def sum(a, b, name='Quentin'):
# 	return a + b

# print(sum(3, 8))