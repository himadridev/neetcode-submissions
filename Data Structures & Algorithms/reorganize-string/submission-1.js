class Solution {
    /**
     * @param {string} s
     * @return {string}
     */

    /**
     * Greedy Approach
     *
     * 1. Count the frequency of each character.
     * 2. If the highest frequency is greater than ceil(n / 2), it's impossible
     *    to rearrange the string without adjacent duplicates.
     * 3. Place characters in descending order of frequency.
     * 4. Fill all even indices first, then fill the odd indices. This maximizes
     *    the distance between repeated characters.
     *
     * Time Complexity: O(n + k log k)
     * Space Complexity: O(n + k)
     * where k is the number of distinct characters.
     */
    reorganizeString(s) {
        const n = s.length;

        // Count the frequency of each character and track the maximum frequency.
        const freq = new Map();
        let maxFreq = 0;

        for (const char of s) {
            const count = (freq.get(char) || 0) + 1;
            freq.set(char, count);
            maxFreq = Math.max(maxFreq, count);
        }

        // If the most frequent character appears too many times, no valid
        // reorganization is possible.
        if (maxFreq > Math.ceil(n / 2)) {
            return "";
        }

        // Process characters from highest to lowest frequency.
        const sortedChars = [...freq.keys()].sort((a, b) => freq.get(b) - freq.get(a));

        const result = new Array(n);

        let charIdx = 0;

        // Fill either the even or odd indices.
        const fillPositions = (startIdx) => {
            for (let idx = startIdx; idx < n; idx += 2) {
                const char = sortedChars[charIdx];

                result[idx] = char;

                const count = freq.get(char);
                freq.set(char, count - 1);

                // Move to the next character once the current one is fully placed.
                if (count === 1) {
                    charIdx++;
                }
            }
        };

        // Spread frequent characters as far apart as possible.
        fillPositions(0);

        // Fill the remaining positions.
        fillPositions(1);

        return result.join("");
    }
}
