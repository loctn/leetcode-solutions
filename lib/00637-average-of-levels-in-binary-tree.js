// https://leetcode.com/problems/average-of-levels-in-binary-tree

var averageOfLevels = function(root, level = 0, counts = []) {
    if (!root) return;
    counts[level] = counts[level] || { sum: 0, nodes: 0 };
    counts[level].sum += root.val;
    counts[level].nodes++;
    averageOfLevels(root.left, level + 1, counts);
    averageOfLevels(root.right, level + 1, counts);
    return level || counts.map(count => count.sum / count.nodes);
};