def get_longer_word(word1: str, word2: str) -> str:
    return word2 if len(word2) > len(word1) else word1



# do not modify below this line
print(get_longer_word("yellow", "orange"))
print(get_longer_word("red", "blue"))
print(get_longer_word("green", "blue"))
