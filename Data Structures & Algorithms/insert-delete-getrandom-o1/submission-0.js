class RandomizedSet {

    constructor() {
        this.numsToIdx = new Map();
        this.numList = [];
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {

        if(this.numsToIdx.has(val)) {
            return false;
        } else {
            this.numsToIdx.set(val, this.numList.length);
            this.numList.push(val);
            return true;
        }

    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {

        if(!this.numsToIdx.has(val)) {
            return false;
        } else {
            
            // Getting the last element in the array list
            const last = this.numList[this.numList.length - 1];
            
            // If target is the last
            if(val === last) {
                this.numList.pop();
                this.numsToIdx.delete(last);
                return true;
            } 
            // target is not the last
            else {
                
                // index of the target value in the array list
                const targetIdx = this.numsToIdx.get(val);

                // swap values at the target index and last index in the array list
                this.numList[targetIdx] = last;
                this.numList[this.numList.length - 1] = val;
                // now we can pop()
                this.numList.pop(); // removed target from the array list

                // Update value of the 'last' in the hash Map
                this.numsToIdx.set(last, targetIdx);
                // delete the target entry from the hash map
                this.numsToIdx.delete(val);

                return true;

            }

        }

    }

    /**
     * @return {number}
     */
    getRandom() {

        return this.numList[ Math.floor(Math.random() * this.numList.length) ];

    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
