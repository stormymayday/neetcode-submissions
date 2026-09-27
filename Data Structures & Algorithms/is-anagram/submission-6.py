class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False
        
        char_count = {}

        for char in s:
            if char not in char_count:
                char_count[char] = 0
            char_count[char] += 1
        
        for char in t:
            if char not in char_count:
                return False
            char_count[char] -= 1
            if char_count[char] == 0:
                del char_count[char]

        return len(char_count) == 0