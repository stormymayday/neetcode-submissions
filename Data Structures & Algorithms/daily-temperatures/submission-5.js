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

            const currentTemperature = temperatures[i];
            const currentDay = i;

            if(stack.length === 0) {
                
                stack.push([currentTemperature, currentDay]);

            } else {

                while(stack.length !== 0 && stack[stack.length - 1][0] <= currentTemperature) {
                    stack.pop();
                }

                if(stack.length !== 0 && stack[stack.length - 1][0] > currentTemperature) {

                    result[i] = stack[stack.length - 1][1] - currentDay;

                } 
                
                stack.push([currentTemperature, currentDay]);

            }

        }

        return result;

    }
}
