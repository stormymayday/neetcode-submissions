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

            const currentTemp = temperatures[i];
            const currentDay = i;

            while(stack.length !== 0 && currentTemp > stack[stack.length - 1][0]) {
                const [temp, day] = stack.pop();
                result[day] = currentDay - day;
            }

            stack.push([currentTemp, currentDay]);

        }

        return result;

    }
}
