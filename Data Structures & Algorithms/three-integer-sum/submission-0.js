class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // Sort the array so we can use the two-pointer technique
        nums.sort((a, b) => a - b);

        let remainingTwoSum = function (nums, x, result) {
            // keeping the x pointer, find the two sum in remaining arr
            let start = x + 1;
            let end = nums.length - 1;

            while (start < end) {
                let sum = nums[x] + nums[start] + nums[end];

                if (sum === 0) {
                    // Found a valid triplet
                    result.push([nums[x], nums[start], nums[end]]);

                    start++;
                    end--;

                    // Skip duplicate values for the start pointer
                    while (start < end && nums[start] === nums[start - 1]) {
                        start++;
                    }

                    // Skip duplicate values for the end pointer
                    while (start < end && nums[end] === nums[end + 1]) {
                        end--;
                    }
                } else if (sum > 0) {
                    end--;
                } else {
                    start++;
                }
            }
        };

        let result = [];
        for (let i = 0; i < nums.length - 2; i++) {
            // Skip duplicate first elements
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            remainingTwoSum(nums, i, result);
        }

        return result;
    }
}
