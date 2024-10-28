/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
 */

// @lc code=start
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// var rangeSumBST = function(root, low, high) { // 深度优先搜索
//     if (!root) {
//         return 0;
//     }
//     if (root.val > high) {
//         return rangeSumBST(root.left, low, high);
//     } else if (root.val < low) {
//         return rangeSumBST(root.right, low, high);
//     }
//     return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
// };
var rangeSumBST = function(root, low, high) { // 广度优先搜索
    let sum = 0;
    let queue = [root]
    while (queue.length > 0) {
        let node = queue.shift()
        if (node) {
            if (node.val < low) {
                queue.push(node.right)
            } else if (node.val > high) {
                queue.push(node.left)
            } else {
                sum += node.val
                queue.push(node.left)
                queue.push(node.right)
            }
        }
    }
    return sum
};
// @lc code=end

