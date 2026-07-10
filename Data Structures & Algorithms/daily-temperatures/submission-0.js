class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let stack = [];

        let result = new Array(n).fill(0);
        for (let i = n - 1; i >= 0; i--) {
            let temperature = temperatures[i];

            while (stack.length > 0 && stack[stack.length - 1][0] <= temperature) {
                stack.pop();
            }

            if (stack.length > 0) {
                result[i] = stack[stack.length - 1][1] - i;
            }

            stack.push([temperature, i]);
        }

        return result;
    }
}
