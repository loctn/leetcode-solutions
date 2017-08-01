// https://leetcode.com/problems/3sum

const threeSum = (nums) => {
    nums.sort((a, b) => a - b)
    const res = []
    let i = 0
    
    while (i < nums.length - 2) {
        let j = i + 1
        let k = nums.length - 1
        
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            
            if (sum < 0) {
                while (nums[++j] === nums[j - 1]);
            } else if (sum > 0) {
                while (nums[--k] === nums[k + 1]);
            } else {
                res.push([nums[i], nums[j], nums[k]])
                while (nums[++j] === nums[j - 1]);
                while (nums[--k] === nums[k + 1]);
            }
        }
        
        while (nums[++i] === nums[i - 1]);
    }
    
    return res
};