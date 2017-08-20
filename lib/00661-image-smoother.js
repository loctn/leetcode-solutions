// https://leetcode.com/problems/image-smoother

const imageSmoother = (M) => {
    const DIRS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]]
    return M.map((row, r) =>
        row.map((el, c) => Math.floor(
            DIRS.reduce((sum, d) =>
                sum + (M[r + d[0]] && M[r + d[0]][c + d[1]] || 0)
            , 0) / (3 - !r - (r === M.length - 1)) / (3 - !c - (c === M[0].length - 1))
        ))
    )
};