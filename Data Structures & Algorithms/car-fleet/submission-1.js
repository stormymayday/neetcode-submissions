class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        // create tuples array
        const positionSpeedPairs = position.map((position, index) => {
            return [position, speed[index]];
        });

        // sort by position (ASC)
        positionSpeedPairs.sort((a,b) => a[0] - b[0]);

        // for time
        const stack = [];

        // Going backwards
        for(let i = positionSpeedPairs.length - 1; i >= 0; i--) {

            const [currentPosition, currentSpeed] = positionSpeedPairs[i];
            const currentTime = (target - currentPosition)/currentSpeed;

            // The Logic:
            // if the next car in line has smaller Time
            // it becomes part of the fleet (don't push it to the stack)
            // Otherwise, push it

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
