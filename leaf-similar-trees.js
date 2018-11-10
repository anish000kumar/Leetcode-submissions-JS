/*
872. Leaf-Similar Trees
Easy
232
13


Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.



For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 

Note:

Both of the given trees will have between 1 and 100 nodes.
Accepted
22,423
Submissions
37,010
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 
 
var leafSimilar = function(root1, root2) {
    return leavesFn(root1) === leavesFn(root2)
};


var leavesFn = function(head){
    leaves = []
    
     ;(function getLeaf(head){
        if(head==null) return "";    
        if(head.left==null && head.right == null) 
               leaves.push(head.val);

        let left = getLeaf(head.left)
        let right = getLeaf(head.right)

     })(head)
        
    return leaves.join("");
}
