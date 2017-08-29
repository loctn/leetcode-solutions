// https://leetcode.com/problems/non-decreasing-array

const checkPossibility = (nums) => {
    const left = nums.slice(0)
    const right = nums.slice(0)
    const i = nums.findIndex((a, i) => a > nums[i + 1])
    if (~i) left.splice(i, 1)
    if (~i) right.splice(i + 1, 1)
    return !left.some((a, i) => a > left[i + 1]) || !right.some((a, i) => a > right[i + 1])
};