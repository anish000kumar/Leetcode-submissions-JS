/*
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

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
 * @param {number} val
 * @return {ListNode}
 */

// SOL T:O(n)/S:O(1)

function removeElements(head, val) {
  if(head == null) return null;
    
    let slow = head;
    let fast = head.next;
    
    while(slow && fast){
        if(fast.val=== val){
            fast = fast.next;
            slow.next = fast;
        }
        else{
            slow = fast
            fast = fast.next;
        }
    }
    
    if(head.val == val) return head.next;
    
    return head;
}



// SOL 1:  T:O(n)/ S:O(1)
var removeElements = function(head, val) {
    
    while(head && head.val==val){
        head = head.next;
    }
    
    if(head == null) return null;
    
    let prev = null;
    let curr = head;
    let next = head.next;
    
    while(curr){
        
        if(curr.val == val){   
            if(next && next.val == val){
               curr = next;
               next  = (curr? curr.next: null);
               continue
            }
            curr.next = null;
            prev.next = next;
        }
        
        
        prev = curr;
        curr = next;
        next  = (curr? curr.next: null);
    }
    
    return head;
};





 
// SOL 1:  T:O(n)/ S:O(n)
var removeElements2 = function(head, val) {
    let arr = [];
    
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    
    arr = arr.filter(it => it!==val);
    
    let headNode = null;
    let tailNode = null;
    
    arr.forEach(item => {
        let newNode = new ListNode(item)
        if(headNode == null){
            headNode = newNode;
            tailNode = newNode
        }
        else{
            tailNode.next = newNode;
            tailNode = tailNode.next;
        }
    })
    
    return headNode;
};
