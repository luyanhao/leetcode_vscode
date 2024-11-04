/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start

//   Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n <= 0) {
        return [];
    }
    let generateTree = (start, end) => {
        let trees = [];
        if (start > end) {
            trees.push(null);
            return trees;
        } else if (start == end) {
            trees.push(new TreeNode(start));
            return trees;
        }
        for (let i = start; i <= end; i++){
            let leftTrees = generateTree(start, i -1);
            let rightTrees = generateTree(i + 1, end);
            for (let letfTree of leftTrees) {
                for (let rightTree of rightTrees) {
                    let currentTree = new TreeNode(i);
                    currentTree.left = letfTree;
                    currentTree.right = rightTree;
                    trees.push(currentTree);
                }
            }
        }
        return trees;
    }
    return generateTree(1, n);
};
// @lc code=end

