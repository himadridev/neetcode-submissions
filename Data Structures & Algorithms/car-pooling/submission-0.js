class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        // Difference array:
        // +passengers when they get in
        // -passengers when they get out
        const passengerDiff = new Array(1001).fill(0);

        for (const [passengers, from, to] of trips) {
            passengerDiff[from] += passengers;
            passengerDiff[to] -= passengers;
        }

        let currentPassengers = 0;

        // Prefix sum gives the number of passengers after each stop.
        for (const change of passengerDiff) {
            currentPassengers += change;

            // Capacity exceeded.
            if (currentPassengers > capacity) {
                return false;
            }
        }

        return true;
    }
}
