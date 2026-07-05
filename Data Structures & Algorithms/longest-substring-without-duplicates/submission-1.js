class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length;
        let lastSeen = new Map();
        
        let maxLen = 0;
        let i = 0;
        let j = 0;
        while (j < n) {
            if (lastSeen.has(s[j])) {
                i = Math.max(i, lastSeen.get(s[j]) + 1)
            }
            
            lastSeen.set(s[j], j);
            maxLen = Math.max(maxLen, (j - i) + 1);
            j++;
        }

        return maxLen;
    }
}
