class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        // Maps each value in nums2 -> its next greater element
        const map = {};

        // Monotonic decreasing stack.
        // The top always holds the nearest greater candidate.
        const stack = [];

        // Process from right to left so the stack already contains
        // all possible "next greater" candidates.
        for (let i = nums2.length - 1; i >= 0; i--) {
            const num = nums2[i];

            // Remove numbers that cannot be the next greater element.
            // Current number blocks them for every element further left.
            while (stack.length > 0 && stack[stack.length - 1] <= num) {
                stack.pop();
            }

            // Top of the stack is the next greater element.
            map[num] = stack.length === 0 ? -1 : stack[stack.length - 1];

            // Current number becomes a candidate for elements on its left.
            stack.push(num);
        }

        // Build the answer using the precomputed map.
        const result = [];

        for (let i = 0; i < nums1.length; i++) {
            result.push(map[nums1[i]]);
        }

        return result;
    }
}
