// https://leetcode.com/problems/contiguous-array

const findMaxLength = (nums) => {
    if (nums.length < 2) return 0
    const sums = [0]
    const maxIndexes = { '0': 0 }
    for (let i = 0; i < nums.length; i++) {
        sums.push(sums[i] + (nums[i] || -1))
        maxIndexes[sums[i + 1]] = i + 1
    }
    let max = 0
    for (let i = 0; i < sums.length; i++) {
        max = Math.max(max, maxIndexes[sums[i]] - i)
        if (max >= sums.length - i - 1) break
    }
    return max;
};