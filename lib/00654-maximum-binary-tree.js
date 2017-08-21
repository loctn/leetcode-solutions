// https://leetcode.com/problems/maximum-binary-tree

const constructMaximumBinaryTree = (nums, low = 0, high = nums.length - 1) => {
    if (low > high) return null
    let i = low
    for (let j = low + 1; j <= high; j++) {
        if (nums[j] > nums[i]) i = j
    }
    const root = new TreeNode(nums[i])
    root.left = constructMaximumBinaryTree(nums, low, i - 1)
    root.right = constructMaximumBinaryTree(nums, i + 1, high)
    return root
};