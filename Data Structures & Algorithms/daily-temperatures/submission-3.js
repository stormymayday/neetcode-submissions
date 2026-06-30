class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const n = temperatures.length;
        const result = new Array(n).fill(0);

        for(let i = 0; i < n; i++) {

            for(let j = i + 1; j < n; j++) {

                if(temperatures[j] > temperatures[i]) {
                    result[i] = j - i;
                    break;
                }

            }

        }

        return result;

    }
}
