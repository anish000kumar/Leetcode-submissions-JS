/*
445. Add Two Numbers II
Medium
519
74


You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
Accepted
67,832
Submissions
141,770
*/



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    
    let firstNode = null;
    let lastNode = null;
    
    let head1 = reverseList(l1);
    let head2 = reverseList(l2);
 
    
    let carry = 0;
    
    while(head1 || head2){
        let val1 = head1 ? head1.val : 0;
        let val2 = head2 ? head2.val : 0;
        
        
        let sum = carry + val1 + val2;
        
        let digit = sum % 10;
        carry = Math.floor(sum/10);
        
        let node = new ListNode(digit);
        
        // console.log(node.val)
        
        if(!firstNode){
            firstNode = node;
            lastNode = node
        }
        else{
            lastNode.next = node;
            lastNode = lastNode.next;
        }
        
        head1 = head1? head1.next: null;
        head2 = head2? head2.next: null;
    }
    
    if(carry){
        lastNode.next = new ListNode(carry);
    }
    
    return reverseList(firstNode);
    
};



function reverseList(head){
    let prev = null;
    let next = null;
    
    while(head){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    
    return prev;
}
