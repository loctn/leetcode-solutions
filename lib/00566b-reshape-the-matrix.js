// https://leetcode.com/problems/reshape-the-matrix

var matrixReshape = function(nums, h, w) {
    const all = nums.reduce((all, row) => [...all, ...row], []);
    return all.length === h * w ? new Array(h).fill(0).map((row, r) => all.slice(r * w, r * w + w)) : nums;
};