// https://leetcode.com/problems/two-sum-iv-input-is-a-bst

const findTarget = (root, k, map = {}) => {
    if (!root) return false
    if (k - root.val in map) return true
    map[root.val] = 1
    return findTarget(root.left, k, map) || findTarget(root.right, k, map)
};