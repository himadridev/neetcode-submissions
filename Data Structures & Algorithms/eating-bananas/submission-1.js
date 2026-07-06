class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let lower = 1;
        let upper = Math.max(...piles);

        let minK = upper;
        while (lower <= upper) {
            let currK = Math.floor((lower + upper) / 2);

            let currH = 0;
            for (let i = 0; i < piles.length; i++) {
                currH += Math.ceil(piles[i] / currK);
            }

            if (currH <= h) {
                upper = currK - 1;
                minK = Math.min(minK, currK)
            } else {
                lower = currK + 1;
            }
        }

        return minK;
    }
}
