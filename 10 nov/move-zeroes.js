/*
283. Move Zeroes
Easy
1465
54


Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
Accepted
368,861
Submissions
700,203
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */




// O(n) 
var moveZeroes = function(nums) {
    let start =0;
    let curr = 0;
    
    while(curr < nums.length){
        if(nums[curr]){
            let temp = nums[start];
            nums[start] = nums[curr];
            nums[curr] = temp;
            start++;
        }
        
      curr++;
    }
    
};


// O(n2) bubbleSegragation
function moveZeroes2(nums) {
    
    for(let i = 0;  i< nums.length; i++){
        
        for (let j= i ; j < nums.length; j++){
            if(nums[i] == 0){
                 let temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
           
        }
    }
   
};
