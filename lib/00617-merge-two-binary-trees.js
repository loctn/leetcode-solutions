// https://leetcode.com/problems/merge-two-binary-trees

var mergeTrees = function(t1, t2) {
    if (!t1 && !t2) return null;
    const root = new TreeNode(((t1 || 0).val || 0) + ((t2 || 0).val || 0));
    root.left = mergeTrees(t1 && t1.left, t2 && t2.left);
    root.right = mergeTrees(t1 && t1.right, t2 && t2.right);
    return root;
};