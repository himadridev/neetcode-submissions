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
            let gain = gas[i] - cost[i];
            currentTank += gain;
            totalGain += gain;

            if (currentTank < 0) {
                currentTank = 0;
                start = i + 1;
            }
        }

        return totalGain < 0 ? -1 : start;
    }
}
