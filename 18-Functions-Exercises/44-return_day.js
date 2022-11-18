function returnDay(num) {
    const days = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]

    if (num >= 1 && num <= 7) {
        return days[num - 1]
    }
    return null
}
