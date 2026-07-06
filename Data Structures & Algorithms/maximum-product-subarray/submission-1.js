class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let currMax = nums[0];
        let currMin = nums[0];

        let maximum = currMax;

        for (let i = 1; i < nums.length; i++) {
            let num = nums[i];
            let currMaxCopy = currMax;
            currMax = Math.max(num, currMaxCopy * num, currMin * num);
            currMin = Math.min(num, currMaxCopy * num, currMin * num);

            maximum = Math.max(maximum, currMax);
        }

        return maximum;
    }
}
