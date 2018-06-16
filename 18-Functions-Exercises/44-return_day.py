# === using list ===
def return_day(num):
    days = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]

    if 1 <= num <= len(days):
        return days[num - 1]
    else:
        return None
