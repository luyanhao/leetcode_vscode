/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
// var isCousins = function(root, x, y) { // 深度优先搜索
//     let xFound = false;
//     let xDeep = -1;
//     let xParent = null;

//     let yFound = false;
//     let yDeep = -2
//     let yParent = null;

//     let dfs = (node, parent, deep) => {
//         if (!node) {
//             return;
//         }
//         if (node.val == x) {
//             xFound = true;
//             xDeep = deep;
//             xParent = parent;
//         }
//         if (node.val == y) {
//             yFound = true;
//             yDeep = deep;
//             yParent = parent
//         }
//         if (xFound && yFound) {
//             return;
//         }

//         dfs(node.left, node, deep + 1);
//         dfs(node.right, node, deep + 1);
//     }

//     dfs(root, null, 0);

//     return xFound && yFound && xDeep == yDeep && xParent != yParent;
// };
var isCousins = function(root, x, y) { // 广度优先搜索
    if (!root) {
        return false;
    }

    let xFound = false;
    let xDeep = -1;
    let xParent = null;

    let yFound = false;
    let yDeep = -2
    let yParent = null;

    let queue = [root]
    let deepQueue = [0]

    let update = (node, parent, deep) => {
        if (node.val == x) {
            xFound = true;
            xDeep = deep;
            xParent = parent
        }
        if (node.val == y) {
            yFound = true;
            yDeep = deep;
            yParent = parent
        }
    }

    do {
        let node = queue.shift();
        let deep = deepQueue.shift();

        if (node.left) {
            queue.push(node.left);
            deepQueue.push(deep + 1);

            update(node.left, node, deep + 1);
            if (xFound && yFound) {
                break;
            }
        }

        if (node.right) {
            queue.push(node.right);
            deepQueue.push(deep + 1);

            update(node.right, node, deep + 1);
            if (xFound && yFound) {
                break;
            }
        }

    } while (queue.length > 0)
    

    return xFound && yFound && xDeep == yDeep && xParent != yParent;
};
// @lc code=end

