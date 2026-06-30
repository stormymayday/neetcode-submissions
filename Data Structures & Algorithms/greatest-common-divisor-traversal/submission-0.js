class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canTraverseAllPairs(nums) {

        const uf = new UnionFind(nums.length);

        for(let i = 0; i < nums.length - 1; i += 1) {
            for(let j = i + 1; j < nums.length; j += 1) {
                if(this.gcd(nums[i], nums[j]) > 1) {
                    uf.union(i, j);
                }
            }
        }

        return uf.getNumComponents() === 1;

    }

    gcd(a, b) {
  // Make sure inputs are positive
  a = Math.abs(a);
  b = Math.abs(b);

  // Euclidean algorithm
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
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
    getNumComponents() {
        return this.numComponents;
    }
}
