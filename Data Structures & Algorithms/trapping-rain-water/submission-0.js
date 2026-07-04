class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;

        let maxL = 0;
        let maxR = 0;

        let total = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                maxL = Math.max(maxL, height[left]);
                total += maxL - height[left];
                left++;
            } else {
                maxR = Math.max(maxR, height[right]);
                total += maxR - height[right];
                right--;
            }
        }

        return total;
    }
}
