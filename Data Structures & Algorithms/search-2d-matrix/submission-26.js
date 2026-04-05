class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;
        
        let l = 0,
            r = COLS * ROWS - 1;
        let m = null;
        let row = null,
            col = null;
        while (l <= r) {
            m = l + Math.floor((r - l) / 2);
            row = Math.floor(m / COLS),
                col = m % COLS
            if (target > matrix[row][col]) {
                l = m + 1;
            } else if (target < matrix[row][col]) {
                r = m - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
