class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // Use Map instead of array for frequency counting
        const count = new Map();
        for (const task of tasks) {
            count.set(task, (count.get(task) || 0) + 1);
        }
        
        // Build array of [frequency, task] pairs
        const arr = [];
        for (const [task, frequency] of count.entries()) {
            arr.push([frequency, task]);
        }
        
        let time = 0;
        const processed = [];
        
        while (arr.length > 0) {
            let maxi = -1;
            
            // Find the task with highest frequency that's not in cooldown
            for (let i = 0; i < arr.length; i++) {
                let ok = true;
                
                // Check if this task is in cooldown period
                for (let j = Math.max(0, time - n); j < time; j++) {
                    if (j < processed.length && processed[j] === arr[i][1]) {
                        ok = false;
                        break;
                    }
                }
                
                if (!ok) continue;
                
                // Among available tasks, pick the one with highest frequency
                if (maxi === -1 || arr[maxi][0] < arr[i][0]) {
                    maxi = i;
                }
            }
            
            time++;
            let cur = -1;
            
            if (maxi !== -1) {
                cur = arr[maxi][1];  // Get the task character
                arr[maxi][0]--;      // Decrease remaining count
                if (arr[maxi][0] === 0) {
                    arr.splice(maxi, 1);  // Remove completed task
                }
            }
            
            processed.push(cur);
        }
        
        return time;
    }
}