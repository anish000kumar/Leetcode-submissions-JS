/*
24. Swap Nodes in Pairs
Medium
754
62


Given a linked list, swap every two adjacent nodes and return its head.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
Note:

Your algorithm should use only constant extra space.
You may not modify the values in the list's nodes, only nodes itself may be changed.
Accepted
251,655
Submissions
606,728
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let newHead = head.next;

    let curr = head;
    
    while(curr && curr.next){
        let twoNext = curr.next.next;
        curr.next.next= curr;
        curr.next = (twoNext && twoNext.next) ? twoNext.next: twoNext;
        curr = twoNext;

    }
    
    
    return newHead;
};
