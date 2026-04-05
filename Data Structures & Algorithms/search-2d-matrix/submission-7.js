class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // 1 2 4 8
        // 10 11 12 13
        // 14 20 30 40
        // target 
        // [1, 10, 14];

        // 1. find the index of array
        // if target 
        let l = 0,
            r = matrix.length - 1;
        while (l < r) {
            let m = l + Math.floor((r - l) / 2);

            // > target
            if (matrix[m][0] > target) {
                r = m - 1;
            } 
            // 
            else if (matrix[m][0] <= target && target <= matrix[m][matrix[m].length - 1]){
                l = m;
                break;
            }
            else {
                l = m + 1;
            }
        }
        let l_1 = 0,
            r_1 = matrix[l].length - 1;
        while (l_1 <= r_1) {
            let m_1 = l_1 + Math.floor((r_1 - l_1) / 2);
            console.log("m_1", m_1);
            console.log("l_1", l_1);
            console.log("r_1", r_1);
            if (matrix[l][m_1] === target) {
                return true;
            }

            if (matrix[l][m_1] < target) {
                l_1 = m_1 + 1;
            } else {
                r_1 = m_1 - 1;
            }
        }

        return false;
    }
}
