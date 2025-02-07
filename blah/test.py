try:
    res = 0
    items = [int(i) for i in input().split(" ")]
    for i in items[1:]:
        res += i
    print("yes" if res/len(items[1:]) > 59 else "no")
except:
    exit(0)