// https://leetcode.com/problems/permutations

var permute = function(nums) {
    const res = [];
    backtrack(nums, res);
    return res;
};

function backtrack(nums, res, n = 0) {
    if (n === nums.length - 1) {
        res.push(nums.slice(0));
        return;
    }
    for (let i = n; i < nums.length; i++) {
        [nums[i], nums[n]] = [nums[n], nums[i]];
        backtrack(nums, res, n + 1);
        [nums[i], nums[n]] = [nums[n], nums[i]];
    }
}