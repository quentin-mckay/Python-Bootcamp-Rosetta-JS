# === using list ===
def return_day(num):
    days = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]

    if num in range(1, len(days) + 1):
        return days[num - 1]
    
    return None


print(return_day(2))