class Twitter {
    constructor() {
        this.currentTime = 0;
        this.tweetsByUser = new Map(); // userId to Array of [tweetId, this.currentTime]
        this.follows = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.currentTime += 1;
        if(!this.tweetsByUser.has(userId)) {
            this.tweetsByUser.set(userId, []);
        }
        this.tweetsByUser.get(userId).push([tweetId, this.currentTime]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const allTweets = [];
        
        // Get user's own tweets
        const userTweets = this.tweetsByUser.get(userId) || [];
        allTweets.push(...userTweets);
        
        // Get tweets from people the user follows
        const followeeIds = this.follows.get(userId) || new Set();
        for (const followeeId of followeeIds) {
            const followeeTweets = this.tweetsByUser.get(followeeId) || [];
            allTweets.push(...followeeTweets);
        }
        
        // Sort by timestamp in descending order (most recent first)
        allTweets.sort((a, b) => b[1] - a[1]);
        
        // Return up to 10 most recent tweet IDs
        const result = [];
        for (let i = 0; i < Math.min(10, allTweets.length); i++) {
            result.push(allTweets[i][0]); // tweet ID
        }
        
        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        // Edge Case: Prevent self-following to avoid duplicate tweets in news feed
        if (followerId === followeeId) {
            return;
        }
        if(!this.follows.has(followerId)) {
            this.follows.set(followerId, new Set());
        }
        if(!this.follows.has(followeeId)) {
            this.follows.set(followeeId, new Set());
        }
        this.follows.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.follows.has(followerId)) {
            this.follows.get(followerId).delete(followeeId);
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
                currIdx = largetChildIdx;
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
