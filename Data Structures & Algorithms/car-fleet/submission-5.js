class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        const stack = [];

        // create tuples array
        const positionSpeedPairs = position.map((position, index) => {
            return [position, speed[index]];
        });

        // sort by position (DESC)
        positionSpeedPairs.sort((a,b) => b[0] - a[0]);

        for(let i = 0; i < positionSpeedPairs.length; i++) {

            const [currentPosition, currentSpeed] = positionSpeedPairs[i];
            const currentTime = (target - currentPosition)/currentSpeed;

            if(stack.length === 0) {
                stack.push(currentTime);
            } else {
                if(stack[stack.length - 1] < currentTime) {
                    stack.push(currentTime);
                }
            }

        }

        return stack.length;

    }
}
