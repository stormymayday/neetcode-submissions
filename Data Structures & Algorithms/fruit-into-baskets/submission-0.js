class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {

        let longest = 0;

        // mapping 'fruit/number' to count of this fruit in current window
        const map = new Map();

        let left = 0;
        for(let right = 0; right < fruits.length; right += 1) {
            
            // if the key does not exist, we need to add it
            if(!map.has(fruits[right])) {
                
                // need to shrink if key count is 2
                while(map.size === 2) {
                    map.set(fruits[left], map.get(fruits[left]) - 1);
                    if(map.get(fruits[left]) === 0) {
                        map.delete(fruits[left]);
                    }
                    left += 1;
                }

                // key count is less than 2
                // simply add with a count of 1
                map.set(fruits[right], 1);

            } 
            // key exists, need to increment the count
            else {
                map.set(fruits[right], map.get(fruits[right]) + 1);
            }

            // if the window is valid, update the max length
            if(map.size <= 2) {
                longest = Math.max(longest, right - left + 1);
            }

        }

        return longest;

    }
}
