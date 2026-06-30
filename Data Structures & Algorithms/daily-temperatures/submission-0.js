class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let result = new Array(temperatures.length).fill(0);

        for(let i = 0; i < temperatures.length; i++) {

            const currentTemp = temperatures[i];
            let count = 1;
            let j = i + 1;
            while(j < temperatures.length) {

                if(temperatures[j] > currentTemp) {
                    break;
                }

                count++;
                j++;

            }

            if(j === temperatures.length) {
                result[i] = 0;
            } else {
                result[i] = count;
            }

        }

        return result;

    }
}
