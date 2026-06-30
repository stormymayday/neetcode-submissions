class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const n = temperatures.length;
        const result = new Array(n).fill(0);
        const stack = [];

        for(let i = 0; i < n; i++) {

            const currentTemperature = temperatures[i];
            const currentDay = i;

            while(stack.length !== 0 && currentTemperature > stack[stack.length - 1][0]) {
                const [stackTemperature, stackIndex] = stack.pop();
                result[stackIndex] = currentDay - stackIndex;
            }

            stack.push([currentTemperature, currentDay]);

        }

        return result;

    }
}
