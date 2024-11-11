/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var m1 = Number.MIN_VALUE;
    var m2 = Number.MIN_VALUE;
    var index = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > m1) {
            m2 = m1;
            m1 = nums[i];
            index = i;
        } else {
            m2 = Math.max(m2, nums[i]);
        }
    }
    return m1 >= m2 * 2 ? index : -1;
};
// @lc code=end

