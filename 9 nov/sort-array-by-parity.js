/*
905. Sort Array By Parity
Easy
235
26


Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000
Accepted
31,236
Submissions
44,164

*/
/**
 * @param {number[]} A
 * @return {number[]}
 */


function sortArrayByParity(A){
    let start = 0, end = A.length -1;
    
    while(start < end){
        if(A[start]%2==1){
            //swap with last element
            let temp = A[end];
            A[end] = A[start];
            A[start] = temp;
            //decrease end by 1
            end--;
        }
        else{
            //increase start by 1
            start++;
        }
    }
    
    return A;
}


function sortArrayByParity2(A) {
    
    let odd = [];
    let even = [];
    
    A.forEach(item => {
        if(item%2==0)
            even.push(item)
        else
            odd.push(item)
    })
    
    return even.concat(odd);
};
