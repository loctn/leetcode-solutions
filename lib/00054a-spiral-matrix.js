// https://leetcode.com/problems/spiral-matrix

var spiralOrder = function(matrix) {
    if (!matrix.length) return [];
    const res = [];
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const range = [matrix[0].length, matrix.length - 1];
    let d = 0, r = 0, c = -1;
    while (range[d % 2] > 0) {
        for (let i = 0; i < range[d % 2]; i++) {
            r += dirs[d][0];
            c += dirs[d][1];
            res.push(matrix[r][c]);
        }
        range[d % 2]--;
        d = (d + 1) % 4;
    }
    return res;
};