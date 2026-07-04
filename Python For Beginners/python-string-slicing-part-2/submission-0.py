def first_n_characters(s: str, n: int) -> str:
    return s[0:n]

def last_n_characters(s: str, n: int) -> str:
    return s[-n:]


# do not modify below this line
print(first_n_characters("NeetCode", 3))
print(first_n_characters("NeetCode", 4))
print(first_n_characters("NeetCode", 8))

print(last_n_characters("NeetCode", 3))
print(last_n_characters("NeetCode", 4))
print(last_n_characters("NeetCode", 8))
