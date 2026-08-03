class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let freq = new Array(26).fill(0);

        let maxFreq = 0;
        for (let i = 0; i < tasks.length; i++) {
            // UPPERCASE English letter
            let char = tasks[i];

            // letter index of the array
            let charIdx = char.charCodeAt() - 65;

            // increase the frequency
            ++freq[charIdx];
            maxFreq = Math.max(freq[charIdx], maxFreq);
        }

        // find out the number of letter has max frequency
        let noOfMaxFreq = 0;
        for (let i = 0; i < 26; i++) {
            if (freq[i] === maxFreq) {
                ++noOfMaxFreq;
            }
        }

        // (n + 1) * ("max frequency" - 1) + "number of letter has max frequency"
        let count = (n + 1) * (maxFreq - 1) + noOfMaxFreq;
        return Math.max(tasks.length, count);
    }
}
