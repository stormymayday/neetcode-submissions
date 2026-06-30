class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        // Sort trips by starting point
        trips.sort((a, b) => a[1] - b[1]);

        // Iterate over the sorted trips
        for(let i = 0; i < trips.length; i += 1) {
            let [currCapacity, currStartingPoint, currEndPoint] = trips[i];
            // Brute Force Look back
            for(let j = 0; j < i; j += 1) {
                const [prevCapacity, prevStartingPoint, prevEndPoint] = trips[j];
                if(prevEndPoint > currStartingPoint) {
                    currCapacity += prevCapacity;
                }
            }

            if(currCapacity > capacity) {
                return false;
            }
        }

        return true;
    }
}
