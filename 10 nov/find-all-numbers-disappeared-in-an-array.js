/*
448. Find All Numbers Disappeared in an Array
Easy
1230
113


Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
Accepted
116,826
Submissions
226,164
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */


// O(n) O(1)
var findDisappearedNumbers = function(nums) {
    let res = [];
    
    for(let i = 0; i < nums.length; i++){
        // mark the elements as seen as you move through them
        let el = Math.abs(nums[i]);
        
        if(nums[el-1]  && nums[el-1] > 0){
            nums[el-1] = -nums[el-1]
        }

    }
    
    for(let i =0; i< nums.length; i++){
        if(nums[i] >= 0)
            res.push(i+1)
    }
    
    return res;
};


// O(n) O(n)
var findDisappearedNumbers2 = function(nums) {
    let hash = {};
    let res = [];
    
    nums.forEach(num => {
        hash[num] = true
    })
    
    for(let i = 1; i <= nums.length; i++){
        if(!hash[i])
            res.push(i)
    }
    
    return res;
};
