// https://leetcode.com/problems/kth-largest-element-in-an-array

const findKthLargest = (nums, k) => {
    shuffle(nums)
    return helper(nums, k)
};

const shuffle = (nums) => {
    let n = nums.length
    while (n) {
        const i = Math.floor(Math.random() * n--)
        ;[nums[i], nums[n]] = [nums[n], nums[i]]
    }
};

const helper = (nums, k, low = 0, high = nums.length - 1) => {
    let p = high, i = 0
    while (i < p) {
        if (nums[i] < nums[p]) {
            if (i === p - 1) {
                ;[nums[i], nums[p]] = [nums[p], nums[i]]
                i++
            } else {
                ;[nums[p - 1], nums[p]] = [nums[p], nums[p - 1]]
                ;[nums[i], nums[p]] = [nums[p], nums[i]]
            }
            p--
        } else {
            i++
        }
    }
    if (p < k - 1) return helper(nums, k, p + 1, high)
    if (p > k - 1) return helper(nums, k, low, p - 1)
    return nums[p]
};