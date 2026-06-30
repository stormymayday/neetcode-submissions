class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let k = 1;
        let hoursLeft = h;

        while(hoursLeft > 0) {

            for(let i = 0; i < piles.length; i++) {

                hoursLeft = hoursLeft - Math.ceil(piles[i]/k);

            }

            if(hoursLeft < 0) {
                k++;
                hoursLeft = h;
            } else {
                break;
            }

        }

        return k;

    }
}
