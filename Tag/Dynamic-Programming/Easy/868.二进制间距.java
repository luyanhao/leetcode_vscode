/*
 * @lc app=leetcode.cn id=868 lang=java
 *
 * [868] 二进制间距
 */

// @lc code=start
class Solution {
    public int binaryGap(int n) { // 时间复杂度：O(logn)
        int max = 0;
        int count = 0;
        while ((n & 1) == 0) {
            n >>= 1;
        }
        
        do {
            count ++;
            n = n >> 1;
            if ((n & 1) == 1) {
                max = Math.max(max, count);
                count = 0;
            }
        } while(n > 0);

        return max;
    }
}
// @lc code=end

