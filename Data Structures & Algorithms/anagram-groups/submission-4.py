class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        char_count_key_map = {}

        for curr_str in strs:

            # count corruance of each character
            char_count = [0] * 26
            for char in curr_str:
                char_count[ord(char) - ord("a")] += 1
            
            char_count_key = tuple(char_count)
            if char_count_key not in char_count_key_map:
                char_count_key_map[char_count_key] = []

            char_count_key_map[char_count_key].append(curr_str)

        return list(char_count_key_map.values())