// https://leetcode.com/problems/copy-list-with-random-pointer

var copyRandomList = function(head) {
    if (!head) return null;
    const dummy = new RandomListNode();
    const map = new Map();
    
    let src = head;
    let dest = dummy;
    while (src && !map.has(src)) {
        dest.next = new RandomListNode(src.label);
        map.set(src, dest.next);
        src = src.next;
        dest = dest.next;
    }
    
    for (let [src, dest] of map) {
        dest.random = map.get(src.random) || null;
    }
    
    return dummy.next;
};