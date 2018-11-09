/*
234. Palindrome Linked List
Easy
1191
190


Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
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


function isPalindrome(head){
    let midNode =  getListMiddle(head);
    let head2 = reverseList(midNode);
    
    while(head && head2){
        if(head.val !== head2.val)
            return false
        
        head = head.next;
        head2 = head2.next;
    }
    
    
    return true;
}

function getListMiddle(head){
   let slow = head;
   let fast = head;
    let moveBoth = false;
    
    while(fast){
        if(moveBoth){
            slow = slow.next;
            fast = fast.next;
        }
        else{
            fast = fast.next;
        }
        moveBoth = !moveBoth;
    }
    
    return slow;
}

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


// T: O(n) S:O(n)
function isPalindrome2(head) {
    
    let arr = []
    
    let curr= head
    
    while(curr){
        arr.push(curr.val);
        curr = curr.next;
    }
    
    let newCurr = head
    
    while(arr.length!=0 && newCurr){
        let val = arr.pop();
        
        if(val != newCurr.val){
            return false
        }
        newCurr = newCurr.next;
        
    }
    
    return true;
};
