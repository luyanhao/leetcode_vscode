/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
// var countBits = function(n) { // 最高有效位
//     let bits = [0]
//     let highBit = 1
//     for (let i = 1; i <= n; i++) {
//         if ((i & (i - 1)) == 0) {
//             highBit = i
//         }
//         bits[i] = bits[i - highBit] + 1;
//     }
//     return bits;
// };
var countBits = function(n) { // 最低有效位
    let bits = [0]
    for (let i = 1; i <= n; i++) {
        bits[i] = bits[i >> 1] + (i & 1);
    }
    return bits;
};
// @lc code=end

