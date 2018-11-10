/*
560. Subarray Sum Equals K
Medium
1261
28


Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
Accepted
59,747
Submissions
147,736

*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// O(n2)
function subarraySum(nums, k) {
    let count = 0;
    
    for(let i = 0; i< nums.length; i++){
        
        let sum = nums[i];
        
        let next = i+1;
        
        if(sum == k) count ++;
        
        while(nums[next]!=undefined){
            sum += nums[next];
            if(sum == k) count++;
            next++;
        }
    }
    
    return count
};
