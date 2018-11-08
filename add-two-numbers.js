/**

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.


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
 
var addTwoNumbers = function(l1, l2) {
    
    let firstNode = null;
    let lastNode = null;
    let carry= 0;
    
    const bothAreNotNull = () => !(l1 == null && l2 == null);
    
    while(bothAreNotNull()){
        
        let firstVal = (l1 === null) ? 0 : l1.val;
        let secondVal = (l2 === null) ? 0 : l2.val;
        
        let sum = carry + firstVal + secondVal;
        
        let digit = sum%10;
        carry = Math.floor(sum/10);
        
        let newNode = new ListNode(digit);
        
        if(lastNode === null){
            firstNode = newNode;
            lastNode = newNode;
        }
        else{
            lastNode.next = newNode;
            lastNode = lastNode.next
        }
        
        // finally handle carry
        
        if(carry){
            let newNode = new ListNode(carry);
            lastNode.next = newNode;
        }
        
        l1 = (l1 === null) ? null : l1.next;
        l2 = (l2 === null) ? null : l2.next;
    }
   
    
    
    return firstNode;
};
