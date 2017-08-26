// https://leetcode.com/problems/pacific-atlantic-water-flow

const pacificAtlantic = (matrix) => {
    if (!matrix.length) return []
    const DIRS = [[0, -1], [0, 1], [-1, 0], [1, 0]]
    const res = [], queue = []
    
    ;[1, 0].forEach(p => {
        for (let r = [matrix.length - 1, 0][p], c = 0; c < matrix[0].length; c++) {
            addSquare(matrix, -1, -1, r, c, queue, res, !!p)
        }
        for (let r = p, c = [matrix[0].length - 1, 0][p]; r < matrix.length - !p; r++) {
            addSquare(matrix, -1, -1, r, c, queue, res, !!p)
        }
        
        while (queue.length) {
            const s = queue.shift()
            DIRS.map(d => addSquare(matrix, s[0], s[1], s[0] + d[0], s[1] + d[1], queue, res, !!p))
        }
    })
    
    return res
};

const addSquare = (matrix, or, oc, r, c, queue, res, isPacific) => {
    if (or < 0 || matrix[r] && (
        isPacific  && canFlowPacific(matrix[or][oc], matrix[r][c])
     || !isPacific && canFlowAtlantic(matrix[or][oc], matrix[r][c])
    )) {
        if (!isPacific && matrix[r][c] < 0) res.push([r, c])
        matrix[r][c] = isPacific ? -matrix[r][c] - 1 : '' + matrix[r][c]  // mark visited
        queue.push([r, c])
    }
};

const canFlowPacific = (o, n) => n >= 0 && n >= abs(o);

const canFlowAtlantic = (o, n) => typeof n === 'number' && abs(n) >= abs(o);

const abs = (val) => val >= 0 ? parseInt(val) : -(parseInt(val) + 1);  // 0 => -1, 1 => -2, etc.