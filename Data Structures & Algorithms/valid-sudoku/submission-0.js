class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const hashRow = new Map();
        const hashColumn = new Map();
        const hashSquare = new Map();

        for(let r = 0; r < board.length; r++) {
            for(let c = 0; c < board[r].length; c++) {
                if(board[r][c] === '.') continue;

                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`

                if(
                    (hashRow.get(r) && hashRow.get(r).has(board[r][c])) ||
                    (hashColumn.get(c) && hashColumn.get(c).has(board[r][c])) ||
                    (hashSquare.get(squareKey) && hashSquare.get(squareKey).has(board[r][c]))
                ) {
                    return false;
                }

                if(!hashRow.has(r)) hashRow.set(r, new Set());
                if(!hashColumn.has(c)) hashColumn.set(c, new Set());
                if(!hashSquare.has(squareKey)) hashSquare.set(squareKey, new Set());

                hashRow.get(r).add(board[r][c]);
                hashColumn.get(c).add(board[r][c]);
                hashSquare.get(squareKey).add(board[r][c]);
            }
        }

        return true;
    }
}
