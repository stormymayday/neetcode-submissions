class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        const maxPQ = new CustomMaxPriorityQueue();
        if(a > 0) {
            maxPQ.push("a", a);
        }
        if(b > 0) {
            maxPQ.push("b", b);
        }
        if(c > 0) {
            maxPQ.push("c", c);
        }
        const res = [];
        while(maxPQ.length > 0) {
            // pop the most frequent char
            let {val: topChar, prio: topCount} = maxPQ.pop();
            // check if result is longer than 1 char AND last and second to last chars don't equal topChar
            if(res.length > 1 && res[res.length - 1] === topChar && res[res.length - 2] === topChar) {
                // Check if PQ is not empty
                if(maxPQ.length === 0) {
                    break; // can't extend the string any longer
                } else {
                    // pop the second most frequent char
                    let {val: nextChar, prio: nextCount} = maxPQ.pop();
                    // add it to the result
                    res.push(nextChar);
                    // decreement the count
                    nextCount -= 1;
                    // push it back to the PQ if count is > 0
                    if(nextCount > 0) {
                        maxPQ.push(nextChar, nextCount);
                    }
                }
            } 
            // Otherwise, push topChar to the result
            else {
               // add it to the result
                res.push(topChar);
                // decreement the count
                topCount -= 1;
            }
            // push topChar back to the PQ if count is > 0
            if(topCount > 0) {
                maxPQ.push(topChar, topCount);
            }
        }
        return res.join("");
    }
}

class QueueNode {
    constructor(val, prio) {
        this.val = val;
        this.prio = prio;
    }
}

class CustomMaxPriorityQueue {
    constructor() {
        this.data = [];
        this.length = 0;
    }
    push(val, prio) {
        const newNode = new QueueNode(val, prio);
        this.data.push(newNode);
        this.length += 1;
        let currIdx = this.length - 1;
        let parentIdx = Math.floor((currIdx - 1) / 2);
        while(currIdx > 0 && this.data[currIdx].prio > this.data[parentIdx].prio) {
            this.swap(currIdx, parentIdx);
            currIdx = parentIdx;
            parentIdx = Math.floor((currIdx - 1) / 2);
        }
    }
    pop() {
        if(this.length === 0) {
            return null;
        }
        if(this.length === 1) {
            this.length = 0;
            return this.data.pop();
        }
        const root = this.data[0];
        this.data[0] = this.data.pop();
        this.length -= 1;
        this.siftDown(0);
        return root;
    }
    siftDown(idx) {
        let currIdx = idx;
        while(currIdx < this.length - 1) {
            const leftChildIdx = currIdx * 2 + 1;
            const rightChildIdx = currIdx * 2 + 2;
            const leftChildPrio = this.data[leftChildIdx] === undefined ? -Infinity : this.data[leftChildIdx].prio;
            const rightChildPrio = this.data[rightChildIdx] === undefined ? -Infinity : this.data[rightChildIdx].prio;
            const largerChildIdx = leftChildPrio > rightChildPrio ? leftChildIdx : rightChildIdx;
            const largerChildPrio = leftChildPrio > rightChildPrio ? leftChildPrio : rightChildPrio;
            if(this.data[currIdx].prio < largerChildPrio) {
                this.swap(currIdx, largerChildIdx);
                currIdx = largerChildIdx;
            } else {
                break;
            }
        }
    }
    top() {
        return this.length > 0 ? this.data[0] : null;
    }
    swap(idx1, idx2) {
        const temp = this.data[idx1];
        this.data[idx1] = this.data[idx2];
        this.data[idx2] = temp;
    }
}
