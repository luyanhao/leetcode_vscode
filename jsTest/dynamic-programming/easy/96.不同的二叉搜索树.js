/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var numTrees = function(n) { // 时间复杂度：O(n^2); 空间复杂度：O(N) 动态规划
//     let G = new Array(n +1).fill(0);
//     G[0] = 1
//     G[1] = 1
//     for (let i = 2; i <= n; i ++) {
//         for (let j = 1; j <= i; j ++) {
//             let Gj = G[j - 1] * G[i - j]
//             G[i] = G[i] + Gj
//         }
//     }
//     return G[n]
// };
var numTrees = function(n) { // 时间复杂度：O(n); 空间复杂度：O(1) -- 卡特兰数
    let C = 1
    for (let i = 0; i < n; i++) {
        C = C * 2 * (2 * i + 1) / (i + 2)
    }
    return C
};
// @lc code=end

