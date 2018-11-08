/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

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

var reverseList = function(head) {
    let arr = [];
    
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    
    
    let firstNode = null;
    let lastNode = null;
    
    while(arr.length != 0){
        let val = arr.pop();
        let newNode = new ListNode(val);
        if(firstNode === null){
            firstNode = newNode;
            lastNode = newNode;
        }
        else{
            lastNode.next = newNode;
            lastNode= lastNode.next;
        }
    }
    
    return firstNode;
    
};

// SOL 2


var reverseList2 = function(head) {
    if(head === null)
            return null;
    
    let prev = null;
    let curr = head;
    let next = head.next;
    
    while(curr){
        
        curr.next = prev;
        
        prev = curr;
        curr = next;
        
        if(curr)
            next = curr.next;
    }
    
    return prev;
    
};

// SOL 3



var headNode;

var reverseList = function(head) {
    if(head == null) return null;

    if(head.next == null){
        headNode =  head;
        return head;
    }
    
    reverseList(head.next);
    
    head.next.next = head
    head.next = null;
    
    return headNode
};
