class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const uf = new UnionFind(accounts.length);
        const emailToAccountIndex = new Map();  // email -> index of acc
        
        // 1. Build union-find structure
        for(let accountIndex = 0; accountIndex < accounts.length; accountIndex += 1) {
            for(let emailIndex = 1; emailIndex < accounts[accountIndex].length; emailIndex += 1) {
                if(!emailToAccountIndex.has(accounts[accountIndex][emailIndex])) {
                    // add to hash map
                    emailToAccountIndex.set(accounts[accountIndex][emailIndex], accountIndex)
                } else {
                    // union
                    uf.union(accountIndex, emailToAccountIndex.get(accounts[accountIndex][emailIndex]));
                }
            }
        }

        // 2. Group emails by leader account index
        const leaderAccountIndexToEmails = new Map(); // index of acc -> list of emails
        for(const [email, accountIndex] of emailToAccountIndex.entries()) {
            const leaderAccountIndex = uf.find(accountIndex);
            if(!leaderAccountIndexToEmails.has(leaderAccountIndex)) {
                leaderAccountIndexToEmails.set(leaderAccountIndex, []);
            }
            leaderAccountIndexToEmails.get(leaderAccountIndex).push(email);
        }

        // 3. Build Result
        const result = [];
        for(const [accountIndex, emails] of leaderAccountIndexToEmails.entries()) {
            result.push(
                [accounts[accountIndex][0], ...emails.sort()]
            );
        }
        return result;
    }
}

class UnionFind {
    constructor(n) {
        this.roots = new Map();
        this.sizes = new Map();
        for(let i = 0; i < n; i += 1) {
            this.roots.set(i, i);
            this.sizes.set(i, 1);
        }
    }
    find(x) {
        const root = this.roots.get(x);
        if(root !== x) {
            this.roots.set(x, this.find(root));
        }
        return this.roots.get(x);
    }
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if(rootX === rootY) {
            return false;
        } else {
            if(this.sizes.get(rootX) > this.sizes.get(rootY)) {
                this.roots.set(rootY, rootX);
                this.sizes.set(rootX, this.sizes.get(rootX) + this.sizes.get(rootY));
            } else {
                this.roots.set(rootX, rootY);
                this.sizes.set(rootY, this.sizes.get(rootY) + this.sizes.get(rootX));
            }
            return true;
        }
    }
}
