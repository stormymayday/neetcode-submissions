class MinHeap {
    constructor() {
        this.data = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.data.push(val);
        let currIdx = this.data.length - 1;
        let parentIdx = Math.floor((currIdx - 1)/2);
        while(this.data[currIdx] < this.data[parentIdx]) {
            const temp = this.data[currIdx];
            this.data[currIdx] = this.data[parentIdx];
            this.data[parentIdx] = temp;
            currIdx = parentIdx;
            parentIdx = Math.floor((currIdx - 1)/2);
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.data.length === 0) {
            return -1;
        }
        if(this.data.length === 1) {
            return this.data.pop();
        }
        const result = this.data[0];
        this.data[0] = this.data.pop();
        this.sinkDown(0);
        return result;
    }

    sinkDown(index) {
        let currIdx = index;
        while(currIdx < this.data.length - 1) {
            const leftChildIdx = currIdx * 2 + 1;
            const rightChildIdx = currIdx * 2 + 2;
            const leftChildVal = this.data[leftChildIdx] === undefined ? Infinity : this.data[leftChildIdx];
            const rightChildVal = this.data[rightChildIdx] === undefined ? Infinity : this.data[rightChildIdx];
            const smallerChildIdx = leftChildVal < rightChildVal ? leftChildIdx : rightChildIdx;
            if(this.data[currIdx] > this.data[smallerChildIdx]) {
                const temp = this.data[currIdx];
                this.data[currIdx] = this.data[smallerChildIdx];
                this.data[smallerChildIdx] = temp;
                currIdx = smallerChildIdx;
            } else {
                break;
            }
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.data.length > 0 ? this.data[0] : -1;
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.data = nums;
        // let currentIdx = this.data.length - 1;
        // Optimization: skipping leaves
        let currentIdx = Math.floor((this.data.length - 2)/2);
        while(currentIdx >= 0) {
            this.sinkDown(currentIdx);
            currentIdx -= 1;
        }
    }
}
