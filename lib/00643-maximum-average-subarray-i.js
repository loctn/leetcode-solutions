// https://leetcode.com/problems/maximum-average-subarray-i

var findMaxAverage = function(nums, k) {
    let max = -Infinity;
    for (let i = 0, sum = 0; i < nums.length; i++) {
        sum += nums[i] - (nums[i - k] || 0);
        if (i >= k - 1) max = Math.max(max, sum);
    }
    return max / k;
};