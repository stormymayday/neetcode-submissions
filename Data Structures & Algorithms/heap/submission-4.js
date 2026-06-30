class MinHeap {
    constructor() {
        this.array = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.array.push(val);
        let current = this.array.length - 1;
        while(current > 0) {
            const parentIdx = Math.floor((current - 1) / 2);
            if(this.array[current] < this.array[parentIdx]) {
                const temp = this.array[current];
                this.array[current] = this.array[parentIdx];
                this.array[parentIdx] = temp;
                current = parentIdx;
            } else {
                break;
            }
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.array.length == 0) {
            return -1;
        }
        if(this.array.length === 1) {
            return this.array.pop();
        }
        const min = this.array[0];
        this.array[0] = this.array.pop();
        this.siftDown(0);
        return min;
    }

    siftDown(idx) {
        let current = idx;
        while(current < this.array.length) {
            const leftChildIdx = 2 * current + 1;
            const rightChildIdx = 2 * current + 2;
            const leftChildVal = this.array[leftChildIdx] === undefined ? Infinity : this.array[leftChildIdx];
            const rightChildVal = this.array[rightChildIdx] === undefined ? Infinity : this.array[rightChildIdx];
            const smallerChildIdx = leftChildVal < rightChildVal ? leftChildIdx : rightChildIdx;
            const smallerChildVal = leftChildVal < rightChildVal ? leftChildVal : rightChildVal;
            if(this.array[current] > smallerChildVal) {
                const temp = this.array[current];
                this.array[current] = this.array[smallerChildIdx];
                this.array[smallerChildIdx] = temp;
                current = smallerChildIdx;
            } else {
                break;
            }
        }
    }

    /**
     * @return {number}
     */
    top() {
        if(this.array.length === 0) {
            return -1;
        } else {
            return this.array[0];
        }
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.array = nums;
        let current = this.array.length-1;
        // let current = Math.floor((this.array.length - 2)/2)
        while(current >= 0) {
            this.siftDown(current);
            current -= 1;
        }
    }
}
