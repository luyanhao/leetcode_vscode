/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) { // 时间复杂度 O(logn)
    let maxGap = 0;
    let gap = 0;
    while((n & 1) == 0) {
        n = n >> 1
    }

    do{
        gap += 1
        n  = n >> 1
        if ((n & 1) == 1) {
            maxGap = Math.max(maxGap, gap)
            gap = 0
        }
    } while (n > 0)
    
    return maxGap
};
// @lc code=end

