/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
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
 


var mergeTwoLists = function(l1, l2) {
    if(l1==null && l2==null){
        return null;
    }
    
    let firstNode = null;
    let lastNode = null;
    
    const setNextNode = (node) => {
        if(firstNode === null){
            firstNode = node;
            lastNode = node
        }
        else{
            lastNode.next = node;
            lastNode= lastNode.next;
        }
    }

    const noneIsNull = () => (l1!=null && l2!=null)
    
    while(noneIsNull()){
        if(l1.val <= l2.val){
            setNextNode(l1)
            l1 = l1.next;
        }
        else{
            setNextNode(l2)
            l2 = l2.next;
        }
    }
    
    if(l1==null){
        setNextNode(l2);
    }
    else{
        setNextNode(l1);
    }
    
    return firstNode;
    
};

