class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        anagram_map = {}

        for curr_str in strs:
            sorted_str = "".join(sorted(curr_str))
            if sorted_str not in anagram_map:
                anagram_map[sorted_str] = []
            anagram_map[sorted_str].append(curr_str)
        
        return list(anagram_map.values())