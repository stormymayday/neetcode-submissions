class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const results = new Array(temperatures.length).fill(0);

        for(let i = 0; i < temperatures.length; i++) {

            for(let j = i + 1; j < temperatures.length; j++) {

                if(temperatures[i] < temperatures[j]) {

                    results[i] = j - i;
                    break;

                }

            }

        }

        return results;

    }
}
