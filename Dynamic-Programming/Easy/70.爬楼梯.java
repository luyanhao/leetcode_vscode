/*
 * @lc app=leetcode.cn id=70 lang=java
 *
 * [70] 爬楼梯
 */

// @lc code=start
class Solution {
    public int climbStairs(int n) {
        int p = 0, q = 0, r = 1;
        for (int i = 1; i <= n; i ++) {
            p = q;
            q = r;
            r = p + q;
        }
        return r;
    }
}
// @lc code=end

// 复杂度分析
// 时间复杂度：循环执行 nnn 次，每次花费常数的时间代价，故渐进时间复杂度为 O(n)O(n)O(n)。
//空间复杂度：这里只用了常数个变量作为辅助空间，故渐进空间复杂度为 O(1)O(1)O(1)。
