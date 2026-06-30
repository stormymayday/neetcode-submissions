class MinHeap {
    constructor() {
        this.array = [];
    }
    push(val) {
        this.array.push(val);
        let current = this.array.length - 1;
        while(current > 0) {
            const parentIndex = Math.floor(( current - 1) / 2);
            if(this.array[current] < this.array[parentIndex]) {
                this.swap(current, parentIndex);
                current = parentIndex;
            } else {
                break;
            }
        }
    }
    pop() {
        if(this.array.length === 0) {
            return null;
        }
        if(this.array.length === 1) {
            return this.array.pop();
        }
        const min = this.array[0];
        this.array[0] = this.array.pop();
        this.siftDown(0);
        return min;
    }
    heapify(nums) {
        this.array = nums;
        let current = this.array.length - 1;
        while(current >= 0) {
            this.siftDown(current);
            current -= 1;
        }
    }
    siftDown(index) {
        let current = index;
        while(current < this.array.length - 1) {
            const leftChildIndex = 2 * current + 1;
            const rightChildIndex = 2 * current + 2;
            const leftChildValue = this.array[leftChildIndex] === undefined ? Infinity : this.array[leftChildIndex];
            const rightChildValue = this.array[rightChildIndex] === undefined ? Infinity : this.array[rightChildIndex];
            const smallerChildIndex = leftChildValue < rightChildValue ? leftChildIndex : rightChildIndex;
            const smallerChildValue = leftChildValue < rightChildValue ? leftChildValue : rightChildValue;
            if(this.array[current] > smallerChildValue) {
                this.swap(current, smallerChildIndex);
                current = smallerChildIndex;
            } else {
                break;
            }
        }
    }
    swap(index1, index2) {
        const temp = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = temp;
    }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = new MinHeap();
        this.k = k;
        this.minHeap.heapify(nums);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.push(val);
        while(this.minHeap.array.length > this.k) {
            this.minHeap.pop();
        }
        return this.minHeap.array[0];
    }
}
