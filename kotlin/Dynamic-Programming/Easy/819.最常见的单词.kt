/*
 * @lc app=leetcode.cn id=819 lang=kotlin
 *
 * [819] 最常见的单词
 */

// @lc code=start
class Solution {
    fun mostCommonWord(paragraph: String, banned: Array<String>): String { // 自己写的
        val set = HashSet<String>();
        for (word in banned) {
            set.add(word);
        }
        val map = HashMap<String, Int>();
        var maxWords = "";
        var maxCount = 0;
        var words = "";
        for (i in paragraph) {
            if (Character.isLetter(i)) {
                words += i.lowercase();
            } else if (words != "") {
                if (set.contains(words)) {
                    words = "";
                    continue;
                }

                if (map.containsKey(words)) {
                    val max = map.get(words)!! + 1;
                    map.put(words, max);
                    if (max > maxCount) {
                        maxWords = words;
                        maxCount = max;
                    }
                } else {
                    if (maxCount == 0) {
                        maxWords = words;
                        maxCount = 1;
                    }
                    map.put(words, 1);
                }
                words = "";
            }
        }
        if (maxCount == 0) {
            maxWords = words.lowercase();
        }
        return maxWords;
    }
}
// @lc code=end

