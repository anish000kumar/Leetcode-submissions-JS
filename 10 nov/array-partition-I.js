/*
561. Array Partition I
Easy
481
1326


Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].
Accepted
112,726
Submissions
167,337
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort((a,d) => a-d);
    let sum = 0;
    
    for(let i = 1; i<= nums.length; i++){
        if(i%2==1){
            sum += nums[i-1];
        }
    }
    
    return sum
};
