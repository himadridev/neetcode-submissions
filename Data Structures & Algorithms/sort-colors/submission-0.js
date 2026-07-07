class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let low = 0;
        let mid = 0;
        let high = nums.length - 1;

        while (mid <= high) {
            if (nums[mid] === 0) {
                // swap with low, increment low and mid
                [nums[low], nums[mid]] = [nums[mid], nums[low]];
                low++;
                mid++;
            } else if (nums[mid] === 1) {
                // just increment mid
                mid++;
            } else {
                // nums[mid] === 2
                // swap with high, decrement high
                [nums[mid], nums[high]] = [nums[high], nums[mid]];
                high--;
            }
        }
    }
}
