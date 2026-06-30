class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {

        let totalWeight = weights.reduce((acc, num) => acc + num, 0);

        let minCapacity = Math.max(...weights);

            while(this.daysRequired(weights, minCapacity) > days) {
                minCapacity += 1;
            }

        return minCapacity;


    }

    daysRequired(weights, shipCapacity) {
        let days = [];
        let i = 0;
        while(i < weights.length) {

            let currCapacity = shipCapacity
            const currDay = [];
            // let currDayIdx = i;
            while(i < weights.length && weights[i] <= currCapacity) {
                currDay.push(weights[i]);
                currCapacity -= weights[i];
                i += 1;
            }
            days.push(currDay);

            // i = currDayIdx;

        }

        return days.length;
    }
}
