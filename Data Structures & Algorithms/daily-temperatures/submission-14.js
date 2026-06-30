class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const result = new Array(temperatures.length).fill(0);

        // Monotonic Decreasing (or equal) Stack (pairs)
        const stack = [];

        for(let i = 0; i < temperatures.length; i++) {

            while(stack.length !== 0 && stack[stack.length - 1][0] < temperatures[i]) {

                const [temperature, dayIndex] = stack.pop();
                result[dayIndex] =  i - dayIndex;

            }

            stack.push([temperatures[i], i]);

        }

        return result;

    }
}
