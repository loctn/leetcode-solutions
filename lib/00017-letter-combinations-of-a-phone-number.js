// https://leetcode.com/problems/letter-combinations-of-a-phone-number

const letterCombinations = (digits, res = [], level = 0, combo = []) => {
    if (!digits) return []
    if (level === digits.length) {
        res.push(combo.join(''))
        return
    }
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' }
    for (const c of map[digits[level]]) {
        combo.push(c)
        letterCombinations(digits, res, level + 1, combo)
        combo.pop()
    }
    return res
};