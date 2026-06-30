class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     */
    getOrder(tasks) {
        // Add indices and processed flag
        const withIndex = [];
        for (let i = 0; i < tasks.length; i++) {
            const [enqueueTime, processingTime] = tasks[i];
            withIndex.push([enqueueTime, processingTime, i, false]);
        }
        
        // Sort by enqueue time
        withIndex.sort((a, b) => a[0] - b[0]);

        let currentTime = withIndex[0][0]; // Start at first task's enqueue time
        const taskOrder = [];
        
        while (taskOrder.length < tasks.length) {
            // Find eligible task with shortest processing time
            let candidateIndex = null;
            let minTime = Infinity;
            
            for (const task of withIndex) {
                const [enqueueTime, processingTime, index, processed] = task;
                if (!processed && enqueueTime <= currentTime) {
                    // Choose task with shorter processing time, break ties by smaller index
                    if (processingTime < minTime || 
                        (processingTime === minTime && index < candidateIndex)) {
                        candidateIndex = index;
                        minTime = processingTime;
                    }
                }
            }
            
            if (candidateIndex !== null) {
                // Process the selected task
                for (const task of withIndex) {
                    if (candidateIndex === task[2]) {
                        task[3] = true; // Mark as processed
                        currentTime += task[1]; // Add processing time
                        break;
                    }
                }
                taskOrder.push(candidateIndex);
            } else {
                // No tasks available, jump to next task's enqueue time
                let nextEnqueueTime = Infinity;
                for (const task of withIndex) {
                    if (!task[3] && task[0] > currentTime) {
                        nextEnqueueTime = Math.min(nextEnqueueTime, task[0]);
                    }
                }
                if (nextEnqueueTime !== Infinity) {
                    currentTime = nextEnqueueTime;
                }
            }
        }
        
        return taskOrder;
    }
}