class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if(s1.length > s2.length) {
            return false;
        }

        s1 = s1.split("").sort().join("");

        for(let i = 0; i < s2.length - s1.length + 1; i++) {

            const subStr = s2.slice(i, i + s1.length).split("").sort().join("");

            if(s1 === subStr) {
                return true;
            }

        }

        return false;

    }
}
