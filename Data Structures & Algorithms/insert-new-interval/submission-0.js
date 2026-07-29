class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let n = intervals.length;
        let [newStart, newEnd] = newInterval;

        // Result array to store the final merged intervals.
        let result = [];
        let i = 0;

        // Add all intervals that end before the new interval starts.
        while (i < n && intervals[i][1] < newStart) {
            result.push(intervals[i]);
            i++;
        }

        // Merge all overlapping intervals.
        while (i < n && intervals[i][0] <= newEnd) {
            newStart = Math.min(newStart, intervals[i][0]);
            newEnd = Math.max(newEnd, intervals[i][1]);
            i++;
        }

        // Add the merged interval.
        result.push([newStart, newEnd]);

        // Add the remaining intervals.
        while (i < n) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}
