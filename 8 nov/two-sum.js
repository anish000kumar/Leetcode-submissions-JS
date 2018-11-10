/*
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (39.12%)
 * Total Accepted:    1.2M
 * Total Submissions: 3M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * Example:
 *
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  nums = nums
    .map((value, index) => ({ value, index }))
    .sort((a, d) => a.value - d.value);

  let start = 0,
    end = nums.length - 1;
  const getSum = () => nums[start].value + nums[end].value;

  while (getSum() != target) {
    if (getSum() < target) {
      start++;
    } else {
      end--;
    }
  }

  return [nums[start].index, nums[end].index];
};
