class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length;
        let start = 0;
        let end = n - 1;

        let maxArea = 0;
        while (start < end) {
            let width = end - start;

            let currArea = width * Math.min(heights[start], heights[end]);

            maxArea = Math.max(maxArea, currArea);

            if (heights[end] < heights[start]) {
                end--;
            } else {
                start++;
            }
        }

        return maxArea;
    }
}
