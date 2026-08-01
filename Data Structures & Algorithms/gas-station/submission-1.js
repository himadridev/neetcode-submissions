class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let currentTank = 0;
        let totalGain = 0;
        let start = 0;

        for (let i = 0; i < gas.length; i++) {
            // Net gas gained (or lost) at this station.
            let gain = gas[i] - cost[i];

            totalGain += gain;
            currentTank += gain;

            // Can't reach the next station, so any station in this segment
            // cannot be a valid start. Try the next station.
            if (currentTank < 0) {
                currentTank = 0;
                start = i + 1;
            }
        }

        // If the overall gas is insufficient, completing the circuit is impossible.
        return totalGain < 0 ? -1 : start;
    }
}
