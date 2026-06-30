class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        const hashMap = new Map();

        for(let i = 0; i < numbers.length; i++) {

            if(hashMap.has(target - numbers[i])) {
                // return result
                return [hashMap.get(target - numbers[i]), i + 1];
            } else {
                // add record into the map
                hashMap.set(numbers[i], i + 1);
            }

        }

        return [];

    }
}
