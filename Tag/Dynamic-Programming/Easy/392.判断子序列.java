/*
 * @lc app=leetcode.cn id=392 lang=java
 *
 * [392] 判断子序列
 */

// @lc code=start
class Solution {
    public boolean isSubsequence(String s, String t) {
        int i = 0; 
        int j = 0;
        while (i < s.length() && j < t.length()) {
            char ci = s.charAt(i);
            char cj = t.charAt(j);
            if (ci == cj) {
                i ++;
            }
            j ++;
        }

        return i == s.length();
    }
}
// @lc code=end

