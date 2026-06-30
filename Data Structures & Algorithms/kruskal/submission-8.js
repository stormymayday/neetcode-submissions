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
        // sort edges by weight
        edges.sort((a, b) => a[2] - b[2]);

        const uf = new UnionFind(n);

        const mst = [];
        let mstCost = 0;

        for(const edge of edges) {
            const [src, dst, weight] = edge;
            if(uf.union(src, dst) === true) {
                mst.push([src, dst]);
                mstCost += weight;
                if(mst.length === n - 1) {
                    return mstCost;
                }
            }
        }

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
        return this.numCompoents;
    }
}
