// https://leetcode.com/problems/generate-parentheses

const generateParenthesis = (n) => {
    const res = []
    dfs(res, 2 * n)
    return res
};

const dfs = (res, len, curr = [], presum = 0) => {
    if (curr.length === len) {
        res.push(curr.join(''))
        return
    }
    if (presum < len - curr.length) {
        curr.push('(')
        dfs(res, len, curr, presum + 1)
        curr.pop()
    }
    if (presum > 0) {
        curr.push(')')
        dfs(res, len, curr, presum - 1)
        curr.pop()
    }
};