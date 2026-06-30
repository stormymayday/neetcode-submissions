class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        stones.sort((a, b) => {
            return a - b;
        });
        while(true) {
            if(stones.length > 1) {
                const x = stones.pop();
                const y = stones.pop();
                if(x === y) {
                    continue;
                } else {
                    stones.push(Math.abs(x - y));
                    stones.sort((a, b) => a - b);
                }
            } else if(stones.length === 1) {
                return stones.pop();
            } else {
                return 0;
            }
            
        }
    }
}
