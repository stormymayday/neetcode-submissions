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
        let days = 0;
        let i = 0;
        while(i < weights.length) {

            let currCapacity = shipCapacity

            while(i < weights.length && weights[i] <= currCapacity) {
                currCapacity -= weights[i];
                i += 1;
            }
            days += 1

        }

        return days;
    }
}
