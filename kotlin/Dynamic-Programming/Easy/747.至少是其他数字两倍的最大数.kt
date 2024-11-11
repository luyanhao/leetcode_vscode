/*
 * @lc app=leetcode.cn id=747 lang=kotlin
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
class Solution {
    fun dominantIndex(nums: IntArray): Int {
        var m1 : Int = Int.MIN_VALUE;
        var m2 : Int = Int.MIN_VALUE;
        var index : Int = -1;
        for (i in 0..nums.size - 1 ) {
            if (nums[i] > m1) {
                m2 = m1;
                m1 = nums[i];
                index = i;
            } else {
                m2 = Math.max(nums[i], m2);
            }
        }
        return if(m1 >= m2 * 2) index else -1;
    }
}
// @lc code=end

