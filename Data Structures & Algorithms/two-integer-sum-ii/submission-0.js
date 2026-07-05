class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let n = numbers.length;

        let start = 0;
        let end = n - 1;

        while (start < end) {
            let sum = numbers[start] + numbers[end];
            if (sum === target) {
                break;
            } else if (sum > target) {
                end--;
            } else {
                start++;
            }
        }

        return [start + 1, end + 1];
    }
}
