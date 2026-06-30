class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const hashMap = {};

        for(const string of strs) {

            const sorted = string.split('').sort().join('');

            if(hashMap[sorted] === undefined) {
                hashMap[sorted] = [];
            }

            hashMap[sorted].push(string);

        }

        return Object.values(hashMap);

    }
}
