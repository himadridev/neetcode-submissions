/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        let n = intervals.length;
        if (n <= 1) return true;

        intervals.sort((a, b) => a.start - b.start);

        for (let i = 1; i < n; i++) {
            let prev = intervals[i - 1];
            let curr = intervals[i];

            if (curr.start < prev.end) {
                return false;
            }
        }

        return true;
    }
}
