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
        // Array to store the final result of tweet IDs
        const res = [];
        
        // Add the user to their own follow list to include their own tweets
        if (!this.follows.has(userId)) {
            this.follows.set(userId, new Set());
        }
        this.follows.get(userId).add(userId);
        
        // Create a max-heap to efficiently get tweets in chronological order (most recent first)
        // Priority queue will store: [timestamp, tweetId, followeeId, nextIndex]
        const maxHeap = new CustomMaxPriorityQueue();
        
        // Iterate through all users that this user follows (including themselves)
        for (const followeeId of this.follows.get(userId)) {
            // Check if this followee has any tweets
            if (this.tweetsByUser.has(followeeId)) {
                // Get all tweets from this followee
                const tweets = this.tweetsByUser.get(followeeId);
                
                // Get the index of the most recent tweet (last element in array)
                const index = tweets.length - 1;
                
                // Extract the most recent tweet's data: [tweetId, timestamp]
                const [tweetId, timestamp] = tweets[index];
                
                // Push to max-heap: [timestamp, tweetId, followeeId, nextOlderTweetIndex]
                // timestamp is used as priority (higher timestamp = more recent = higher priority)
                // nextIndex points to the next older tweet from this user (-1 from current)
                maxHeap.push([tweetId, followeeId, index - 1], timestamp);
            }
        }
        
        // Extract up to 10 most recent tweets using the max-heap
        while (maxHeap.length > 0 && res.length < 10) {
            // Pop the tweet with highest timestamp (most recent)
            const heapNode = maxHeap.pop();
            const [tweetId, followeeId, nextIndex] = heapNode.val;
            
            // Add this tweet ID to our result
            res.push(tweetId);
            
            // If there are more older tweets from this same user, add the next one to heap
            if (nextIndex >= 0) {
                // Get the next older tweet from this followee
                const [olderTweetId, olderTimestamp] = this.tweetsByUser.get(followeeId)[nextIndex];
                
                // Push the older tweet to heap: [olderTimestamp, olderTweetId, followeeId, nextIndex-1]
                // This ensures we continue processing tweets from this user in chronological order
                maxHeap.push([olderTweetId, followeeId, nextIndex - 1], olderTimestamp);
            }
        }
        
        // Return the array of up to 10 most recent tweet IDs
        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
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
