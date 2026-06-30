class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let result = new Array(temperatures.length).fill(0);

        for(let i = 0; i < temperatures.length; i++) {

            const currentTemp = temperatures[i];
            
            for(let j = i + 1; j < temperatures.length; j++) {

                if(temperatures[j] > currentTemp) {
                    result[i] = j - i
                    break;
                }

            }

        }

        return result;

    }
}
