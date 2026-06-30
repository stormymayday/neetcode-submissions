class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {

        const n = matchsticks.length;

        const totalLength = matchsticks.reduce((acc, curr) => {
            return acc + curr;
        }, 0);
        if(totalLength % 4 !== 0) {
            return false;
        }

        const sideSize = totalLength / 4;
        const sides = new Array(4).fill(0);

        // sorting in descending order
        const sorted = matchsticks.sort((a, b) => b - a);

        function helper(index) {
            if(index === n) {
                return true;
            }

            for(let j = 0; j < 4; j += 1) {
                if(sides[j] + sorted[index] <= sideSize) {
                    sides[j] += sorted[index];
                    if(helper(index + 1) === true) {
                        return true;
                    }
                    sides[j] -= sorted[index];
                }
            }

            return false;
        }

        return helper(0);

    }
}
