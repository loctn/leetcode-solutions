// https://leetcode.com/problems/longest-absolute-file-path

var lengthLongestPath = function(input, level = 0) {
    let re = new RegExp(`\n\t{${level}}(?!\t)`, 'g');
    let nodes = input.split(re);
    let max = 0;
    for (let node of nodes) {
        let len = node.indexOf('\n');
        if (len === -1) {  // leaf node
            if (~node.indexOf('.')) {  // has file
                max = Math.max(max, node.length);
            }
        } else {
            let childLen = lengthLongestPath(node.substr(len + level + 2), level + 1);
            if (childLen > 0) {
                max = Math.max(max, len + childLen);
            }
        }
    }
    return max ? !!level + max : 0;  // !!level to account for the slash character
};