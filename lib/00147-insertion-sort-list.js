// https://leetcode.com/problems/insertion-sort-list

var insertionSortList = function(head) {
    if (!head) return null;
    let sorted = head;
    head = head.next;
    sorted.next = null;
    while (head) {
        let prev = null;
        let node = sorted;
        while (node && head.val > node.val) {
            prev = node;
            node = node.next;
        }
        let insert = head;
        head = head.next;
        insert.next = node;
        if (prev) {
            prev.next = insert;
        } else {
            sorted = insert;
        }
    }
    return sorted;
};