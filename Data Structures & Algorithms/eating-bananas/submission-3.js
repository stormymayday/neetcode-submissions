class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let left = 1;
        let right = Math.max(...piles);
        let bananasPerHour = right;

        while(left <= right) {

            const middleEatingSpeed = Math.floor((left + right) / 2);
            let totalTime = 0;

            for(let i = 0; i < piles.length; i++) {

                totalTime = totalTime + Math.ceil(piles[i] / middleEatingSpeed);

            }

            if(totalTime <= h) {
                // Current total time is less than max allowed time
                bananasPerHour = middleEatingSpeed;
                right = middleEatingSpeed - 1;
            } else {
                // Current total time is greater than max allowed time
                left = middleEatingSpeed + 1;
            }
        }

        return bananasPerHour;

    }
}
