class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */

    /**
     * Sort intervals by start time, then merge overlapping intervals
     * by extending the end of the last merged interval.
     *
     * Time: O(n log n)
     * Space: O(n)
     */
    merge(intervals) {
        if (intervals.length === 0) return [];

        // Sort intervals by start time
        intervals.sort((a, b) => a[0] - b[0]);

        let result = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            let last = result[result.length - 1];

            // Overlapping interval -> extend the previous interval
            if (intervals[i][0] <= last[1]) {
                last[1] = Math.max(last[1], intervals[i][1]);
            } else {
                // Non-overlapping interval -> start a new merged interval
                result.push(intervals[i]);
            }
        }

        return result;
    }
}
