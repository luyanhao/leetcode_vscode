/*
 * @lc app=leetcode.cn id=938 lang=java
 *
 * [938] 二叉搜索树的范围和
 */

// @lc code=start

import java.util.LinkedHashMap;
import java.util.LinkedList;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// class Solution { // 深度优先搜索
//     public int rangeSumBST(TreeNode root, int low, int high) {
//         if (root == null) {
//             return 0;
//         }
//         if (root.val < low) {
//             return rangeSumBST(root.right, low, high);
//         } else if (root.val > high) {
//             return rangeSumBST(root.left, low, high);
//         }
//         return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
//     }
// }

class Solution { // 广度优先搜索
    public int rangeSumBST(TreeNode root, int low, int high) {
        int sum = 0;
        LinkedList<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            if (node == null) {
                continue;
            }
            if (node.val < low) {
                queue.offer(node.right);
            } else if (node.val > high) {
                queue.offer(node.left);
            } else {
                sum += node.val;
                queue.offer(node.left);
                queue.offer(node.right);
            }
        }
        return sum;
    }
}
// @lc code=end

