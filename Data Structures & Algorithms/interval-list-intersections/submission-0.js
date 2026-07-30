class Solution {
    /**
     * @param {number[][]} firstList
     * @param {number[][]} secondList
     * @return {number[][]}
     */
    intervalIntersection(firstList, secondList) {
        let p1 = 0;
        let p2 = 0;

        let results = [];

        // Compare intervals until one list is exhausted.
        while (p1 < firstList.length && p2 < secondList.length) {
            const first = firstList[p1];
            const second = secondList[p2];

            let intersectionStart = Math.max(first[0], second[0]);
            let intersectionEnd = Math.min(first[1], second[1]);

            // Record the overlapping portion, if any.
            if (intersectionStart <= intersectionEnd) {
                results.push([intersectionStart, intersectionEnd]);
            }

            // Advance the interval that finishes first.
            if (first[1] < second[1]) {
                p1++;
            } else {
                p2++;
            }
        }

        return results;
    }
}
