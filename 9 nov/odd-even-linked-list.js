/*
328. Odd Even Linked List
Medium
525
182


Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
Note:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
Accepted
118,708
Submissions
253,409
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
function oddEvenList(head) {
    if(!head || !head.next) return head;
    
    let head1 = head;
    let head2 = head.next;
    
    let curr = head;
   
    while(curr){
        let next = curr.next;
        curr.next = next? next.next: null;
        curr = next;
    }
    
    let curr2 = head1;
    while(curr2.next){
        curr2 = curr2.next;
    }
    
    curr2.next= head2;
    
    return head1;
};
