def divide(num1, num2):
    try:
        return num1 / num2
    except TypeError:
        print("Please provide two integers or floats")
    except ZeroDivisionError:
        print("Please do not divide by zero")

print(divide(4, 2))
print(divide([], 2))
print(divide(1, 0))