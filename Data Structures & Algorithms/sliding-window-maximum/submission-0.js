class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
        let deque = [];

        let i = 0;
        let j = 0;

        while (j < nums.length) {
            // before pushing the element in the deque
            // pop the smaller elements starting from end last (i.e. back)
            while (deque.length > 0 && nums[j] > deque[deque.length - 1]) {
                deque.pop();
            }

            // push the element in the deque
            deque.push(nums[j]);

            // we have to atleast travel a window length
            // to update result and i pointer
            if (j >= k - 1) {
                // deque[0] will always store the max element
                // update the result
                result.push(deque[0]);

                // corner case, when i poinier and deque[0] both store the max element
                // remove the max element from deque before shifting i pointer
                if (nums[i] === deque[0]) {
                    deque.shift();
                }

                ++i;
            }

            ++j;
        }

        return result;
    }
}
