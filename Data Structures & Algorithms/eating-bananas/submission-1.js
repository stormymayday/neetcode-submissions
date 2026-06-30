class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let bananasPerHour = 1;

        while(true) {

            let totalTime = 0;

            for(let i = 0; i < piles.length; i++) {

                totalTime = totalTime + Math.ceil(piles[i]/bananasPerHour);

            }

            if(totalTime <= h) {
                break;
            } else {
                bananasPerHour++;
                totalTime = 0;
            }

        }

        return bananasPerHour;
    }
}
