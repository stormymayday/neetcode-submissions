class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const frequencyCount = new Map();
        for(let i = 0; i < s.length; i += 1) {
            const char = s[i];
            if(!frequencyCount.has(char)) {
                frequencyCount.set(char, 0);
            }
            frequencyCount.set(char, frequencyCount.get(char) + 1);
        }

        const maxPQ = new CustomMaxPriorityQueue();
        for(const [char, count] of frequencyCount.entries()) {
            maxPQ.push(char, count);
        }

        const res = [];
        while(maxPQ.length >= 2) {
            let {val: topChar, prio: topCount} = maxPQ.pop();
            let {val: nextChar, prio: nextCount} = maxPQ.pop();
            res.push(topChar);
            topCount -= 1;
            if(topCount > 0) {
                maxPQ.push(topChar, topCount);
            }
            res.push(nextChar);
            nextCount -= 1;
            if(nextCount > 0) {
                maxPQ.push(nextChar, nextCount);
            }
        }
        if(maxPQ.length === 0) {
            return res.join("");
        } else {
            const {val: topChar, prio: topCount} = maxPQ.pop();
            if(topChar === res[res.length - 1] || topCount > 1) {
                return "";
            } else {
                res.push(topChar);
                return res.join("");
            }
        }
        
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
