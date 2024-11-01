/*
 * @lc app=leetcode.cn id=96 lang=java
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
class Solution {
    // public int numTrees(int n) { // 时间复杂度：O(n^2); 空间复杂度：O(N) 动态规划
    //     int G[] = new int[n + 1];
    //     G[0] = 1;
    //     G[1] = 1;

    //     for (int i = 2; i <= n; i++) {
    //         for (int j = 1; j <= i; j++) {
    //             int Gj = G[j - 1] * G[i -j];
    //             G[i] += Gj;
    //         }
    //     }
    //     return G[n];
    // }
    public int numTrees(int n) { // 时间复杂度：O(n); 空间复杂度：O(1) -- 卡特兰数
        long C = 1;

        for (int i = 0; i < n; i++) {
            C = C * 2 * (2 * i + 1) / (i + 2);
        }
        return (int)C;
    }
}
// @lc code=end

