/**
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Note:

The number of nodes in the given list will be between 1 and 100.
**/

// SOL1


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
 
var middleNode1 = function(head) {
    let length = getLength(head);
    let midIndex = Math.floor(length / 2);
    
    return getNodeByIndex(head, midIndex);
    
};

function getLength(head){
    let len = 0;
    
    while(head!==null){
        len++;
        head = head.next;
    }
    
    return len;
}

function getNodeByIndex(head, index){
    let activeIndex = 0;
    
    while(activeIndex !== index){
        activeIndex++;
        head = head.next;
    }
    
    return head;
}


// SOL2


var middleNode2 = function(head) {
    
    let slowPointer = head;
    let fastPointer = head;
    let moveBothPointer = false;
    
    while(fastPointer !== null){
        if(moveBothPointer){
            fastPointer = fastPointer.next;
            slowPointer= slowPointer.next;
        }
        else{
            fastPointer = fastPointer.next;
        }
        moveBothPointer = !moveBothPointer;
    }
    
    return slowPointer;
    
};
