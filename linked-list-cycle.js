/*
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

Accepted
316,868
Submissions
916,015
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slowPointer = head;
    let fastPointer = head;
    
    
    while(slowPointer && fastPointer && fastPointer.next){
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next
        
        if(fastPointer==slowPointer){
            return true;
        }
    }
    
    return false;
};

