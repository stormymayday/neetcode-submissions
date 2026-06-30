class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const n = temperatures.length;
        const result = new Array(n).fill(0);
        const stack = [];

        for(let i = n - 1; i >= 0; i--) {

            const currentTemp = temperatures[i];
            const currentDay = i;

            while(stack.length !== 0 && currentTemp >= stack[stack.length - 1][0]) {
                stack.pop();
            }

            if(stack.length !== 0 && currentTemp < stack[stack.length - 1][0]) {
                result[i] = stack[stack.length - 1][1] - currentDay;
            }

            stack.push([currentTemp, currentDay]);

        }

        return result;

    }
}
