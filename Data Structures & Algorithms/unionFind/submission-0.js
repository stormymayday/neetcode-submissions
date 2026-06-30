class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.roots = [];
        this.heights = [];
        for(let i = 0; i < n; i += 1) {
            this.roots.push(i);
            this.heights.push(1);
        }
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        if(this.roots[x] === x) {
            return x;
        }
        const root = this.find(this.roots[x]);
        this.roots[x] = root; // path compression
        return root;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isSameComponent(x, y) {
        return this.find(x) === this.find(y);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if(rootX === rootY) {
            return false;
        } else {
            if(this.heights[rootX] > this.heights[rootY]) {
                this.roots[rootY] = rootX;
                return true;
            } else if(this.heights[rootY] > this.heights[rootX]) {
                this.roots[rootX] = rootY;
                return true;
            } else {
                this.roots[rootX] = rootY;
                this.heights[rootY] += 1;
                return true;
            }
        }
    }

    /**
     * @return {number}
     */
    getNumComponents() {
        let count = 0;
        for(let i = 0; i < this.roots.length; i += 1) {
            if(this.roots[i] === i) {
                count += 1;
            }
        }
        return count;
    }
}
