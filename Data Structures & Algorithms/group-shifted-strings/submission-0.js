class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    groupStrings(strings) {


        const hashMap = new Map();

        for(let i = 0; i < strings.length; i += 1) {

            const currStr = strings[i];

            const hash = this.getHash(currStr);

            if(!hashMap.has(hash)) {
                hashMap.set(hash, []);
            }
            hashMap.get(hash).push(currStr);

        }

        const res = [];
        for(const group of hashMap.values()) {
            res.push(group);
        }
        return res;

    }

    getHash(str) {

        const hash = [];

        for(let i = 0; i < str.length - 1; i += 1) {

            let diff = str[i].charCodeAt(0) - str[i + 1].charCodeAt(0);

            // Handle negative (wrap around)
            if (diff < 0) {
                diff += 26;
            }

            hash.push(diff);

        }

        return hash.join("#");

    }
}
