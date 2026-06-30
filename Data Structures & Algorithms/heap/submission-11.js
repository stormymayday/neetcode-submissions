class MinHeap {
    constructor() {
        this.data = [];
        this.length = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.data.push(val);
        this.length += 1;
        let currIdx = this.length - 1;
        let parentIdx = Math.floor((currIdx - 1) / 2);
        while(this.data[currIdx] < this.data[parentIdx]) {
            this.swap(currIdx, parentIdx);
            currIdx = parentIdx;
            parentIdx = Math.floor((currIdx - 1) / 2);
        }
    }

    /**
     * @return {number}
     */
    pop() {

        if(this.length === 0) {
            return - 1;
        } else if(this.length === 1) {
            this.length -= 1;
            return this.data.pop();
        } else {

            const top = this.data[0];
            this.data[0] = this.data.pop();
            this.length -= 1;
            this.siftDown(0);
            return top;

        }

    }

    siftDown(idx) {
        let currIdx = idx;
        while(currIdx < this.length - 1) {

            const leftChildIdx = currIdx * 2 + 1;
            const rightChildIdx = currIdx * 2 + 2;

            const leftChildVal = leftChildIdx > this.length - 1 ? Infinity : this.data[leftChildIdx];
            const rightChildVal = rightChildIdx > this.length - 1 ? Infinity : this.data[rightChildIdx];

            const smallerChildIdx = leftChildVal < rightChildVal ? leftChildIdx : rightChildIdx;
            const smallerChildVal = leftChildVal < rightChildVal ? leftChildVal : rightChildVal;

            if(this.data[currIdx] > smallerChildVal) {
                this.swap(currIdx, smallerChildIdx);
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
        return this.length > 0 ? this.data[0] : -1;
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {

        this.data = [...nums];
        this.length = nums.length;

        let currIdx = Math.floor((this.length - 2) / 2);

        while(currIdx >= 0) {
            this.siftDown(currIdx);
            currIdx -= 1;
        }

    }

    swap(idx1, idx2) {
        const temp = this.data[idx1];
        this.data[idx1] = this.data[idx2];
        this.data[idx2] = temp;
    }
}
