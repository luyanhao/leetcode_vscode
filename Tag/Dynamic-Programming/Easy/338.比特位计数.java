/*
 * @lc app=leetcode.cn id=338 lang=java
 *
 * [338] 比特位计数
 */

// @lc code=start
// class Solution {
//     public int[] countBits(int n) {
//         int[] counts = new int[n + 1];
//         for (int i = 0; i <= n; i ++) {
//             counts[i] = computeBit(i);
//         }
//         return counts;
//     }

//     public int computeBit(int x) {
//         int count = 0;
//         while (x > 0) {
//             x &= x -1;
//             count ++;
//         }
//         return count;
//     }
// }
// class Solution { // 最高有效位
//     public int[] countBits(int n) {
//         int[] counts = new int[n + 1];
//         int highBit = 1;
//         for (int i = 1; i <= n; i ++) {
//             if ((i & (i - 1)) == 0) {
//                 highBit = i;
//             }
//             counts[i] = counts[i - highBit] + 1;
//         }
//         return counts;
//     }
// }
class Solution { // 最低有效位
    public int[] countBits(int n) {
        int[] counts = new int[n + 1];
        for (int i = 1; i <= n; i ++) {
            counts[i] = counts[i >> 1] + (i & 1);
        }
        return counts;
    }
}
// @lc code=end

