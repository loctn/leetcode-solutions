// https://leetcode.com/problems/search-in-rotated-sorted-array

const search = (nums, target) => {
    let low = 0
    let high = nums.length - 1
    
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2)
        if (target === nums[mid]) return mid
        
        // Rotated binary search
        if (nums[low] > nums[high]) {
            // The max is on the left
            if (nums[mid] < nums[low]) {
                // The target is on the right
                if (target > nums[mid] && target < nums[low]) {
                    low = mid + 1
                // The target is on the left
                } else {
                    high = mid - 1
                }
            // The max is on the right
            } else {
                // The target is on the left
                if (target < nums[mid] && target > nums[high]) {
                    high = mid - 1
                // The target is on the right
                } else {
                    low = mid + 1
                }
            }
        // Standard binary search
        } else if (target < nums[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    
    return -1
};