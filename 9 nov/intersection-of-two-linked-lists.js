/*
160. Intersection of Two Linked Lists
Easy
1567
101


Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
Credits:
Special thanks to @stellari for adding this problem and creating all test cases.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


function getIntersectionNode(headA, headB){
    let arr1 = [];
    let arr2 = [];
    
    while(headA){
        arr1.push(headA);
        headA= headA.next;
    }
    
    while(headB){
        arr2.push(headB);
        headB= headB.next;
    }
    
    
    let lastMatch = null;
    
    while(arr1.length>0 && arr2.length>0){
        let item1 = arr1.pop();
        let item2 = arr2.pop();
        if(item1 === item2){
            lastMatch = item1;
            continue;
        }
        else{
            return lastMatch;
        }
    }
    
    return lastMatch;
}


// O(n) : O(1)
var getIntersectionNode2 = function(headA, headB) {
    let bgHead  = null;
    let smHead = null;
    let len1 = getLength(headA);
    let len2 = getLength(headB);
    
    let diff = Math.abs(len1-len2);
    
    
    if(len1 > len2){
        bgHead = headA
        smHead = headB
    }
    else{
        bgHead = headB
        smHead = headA
    }
    
    
    let count = 0;
    
    while(bgHead && count < diff){
        bgHead = bgHead.next;
        count++;
    }
    
    while(bgHead && smHead){
        
        if(smHead == bgHead){
            return smHead;
        }
        
        bgHead = bgHead.next;
        smHead = smHead.next;
    }
    
   return null;
};



function getLength(head){
    
    let len = 0;
    
    while(head){
        len++;
        head = head.next;
    }
    
    return len;
}
