/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */
// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const isLetter = (ch) => {
        return (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
    }
    let set = new Set(banned);
    let map = new Map();
    let maxCount = 0;
    let maxWord = '';
    let word = "";
    for (let char of paragraph) {
        if (isLetter(char)) {
            word += char;
        } else if (word) {
            word = word.toLowerCase();
            if (!set.has(word)) {
                if (maxWord == '') maxWord = word.toLowerCase();
                let count = map.get(word) ? map.get(word) + 1 : 1;
                if (count > maxCount) {
                    maxCount = count;
                    maxWord = word;
                }
                map.set(word, count);
            }
            word = "";
        }
    }
    if (maxWord == '') maxWord = word.toLowerCase();
    return maxWord;
};
// @lc code=end

