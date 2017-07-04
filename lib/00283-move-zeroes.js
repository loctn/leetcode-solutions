// https://leetcode.com/problems/move-zeroes

var moveZeroes = function(nums) {
    for (let zeroIndex = 0, nonzeroIndex = 0; nonzeroIndex < nums.length; nonzeroIndex++) {
        if (!nums[nonzeroIndex]) continue;
        [nums[zeroIndex], nums[nonzeroIndex]] = [nums[nonzeroIndex], nums[zeroIndex]];
        zeroIndex++;
    }
};