/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number}
     * @param {Array<Array<number>>}
     * @returns {number}
     */
    minimumSpanningTree(n, edges) {
        // Sort edges by ascending weight - O(E log E)
        edges.sort((a, b) => a[2] - b[2]);

        const uf = new UnionFind(n);
        let totalWeight = 0;
        
        const mst = [];
        for(const edge of edges) {
            const [a, b, weight] = edge;
            if(uf.union(a, b) === true) {
                totalWeight += weight;
                mst.push([a, b]);
                // Early termination: if we have n-1 edges, MST is complete
                if(mst.length === n - 1) {
                    return totalWeight;
                }
            }
        }
        
        // If we exit the loop without completing MST, graph is disconnected
        return -1;
    }
}

class UnionFind {
    constructor(n) {
        this.roots = new Map();
        this.sizes = new Map();
        this.numComponents = n;
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
            if(this.sizes.get(rootX) >= this.sizes.get(rootY)) {
                this.roots.set(rootY, rootX);
                this.sizes.set(rootX, this.sizes.get(rootX) + this.sizes.get(rootY));
            } else {
                this.roots.set(rootX, rootY);
                this.sizes.set(rootY, this.sizes.get(rootY) + this.sizes.get(rootX));
            }
            this.numComponents -= 1;
            return true;
        }
    }
    isSameComponent(x, y) {
        return this.find(x) === this.find(y);
    }
    getNumComponents() {
        return this.numComponents;
    }
}
