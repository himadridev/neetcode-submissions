class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];
        let currNumber = 0;
        let currString = "";

        for (let char of s) {
            if (char >= "0" && char <= "9") {
                // Build the repeat count (handles multi-digit numbers)
                currNumber = currNumber * 10 + Number(char);
            } else if (char === "[") {
                // Start of a nested substring.
                // Save the current decoding state, then reset for the new substring.
                stack.push([currString, currNumber]);
                currNumber = 0;
                currString = "";
            } else if (char === "]") {
                // End of the current nested substring.
                // Restore the previous state and append the decoded substring
                // repeated 'repeatCount' times.
                let [prevString, repeatCount] = stack.pop();
                currString = prevString + currString.repeat(repeatCount);
            } else {
                // Append the current character to the current substring.
                currString += char;
            }
        }

        return currString;
    }
}
