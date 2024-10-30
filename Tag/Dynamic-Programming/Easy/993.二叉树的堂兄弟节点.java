/*
 * @lc app=leetcode.cn id=993 lang=java
 *
 * [993] 二叉树的堂兄弟节点
 */

// @lc code=start

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
class Solution { // 深度优先搜索
    boolean xFound = false;
    int xDep = -1;
    TreeNode xParent = null;

    boolean yFound = false;
    int yDep = -2;
    TreeNode yParent = null;
    
    int x, y;

    public boolean isCousins(TreeNode root, int x, int y) {
        this.x = x;
        this.y = y;
        dfs(root, null, 0);
        return xDep == yDep && xParent != yParent;
    }

    private void dfs(TreeNode root, TreeNode parent, int deep) {
        update(root, parent, deep);
        if (xFound && yFound) {
            return;
        }

        if (root.left != null) {
            dfs(root.left, root, deep + 1);
        }
        if (root.right != null) {
            dfs(root.right, root, deep + 1);
        }
    }

    private void update(TreeNode node, TreeNode parent, int deep) {
        if (node.val == x) {
            xDep = deep;
            xFound = true;
            xParent = parent;
        }
        if (node.val == y) {
            yDep = deep;
            yFound = true;
            yParent = parent;
        }
    }
}
// class Solution { // 广度优先搜索
//     boolean xFound = false;
//     int xDep = -1;
//     TreeNode xParent = null;

//     boolean yFound = false;
//     int yDep = -2;
//     TreeNode yParent = null;
//     int x, y;
//     public boolean isCousins(TreeNode root, int x, int y) {
//         this.x = x;
//         this.y = y;
//         LinkedList<TreeNode> queue = new LinkedList<>();
//         LinkedList<Integer> depQueue = new LinkedList<>();
//         queue.offer(root);
//         depQueue.offer(0);
//         do {
//             TreeNode node = queue.poll();
//             int deep = depQueue.poll();
//             // if (node == null) continue;
//             if (node.left != null) {
//                 queue.offer(node.left);
//                 depQueue.offer(deep + 1);
//                 update(node.left, node, deep + 1);
//                 if (xFound && yFound) {
//                     break;
//                 }
//             }
//             if (node.right != null) {
//                 queue.offer(node.right);
//                 depQueue.offer(deep + 1);
//                 update(node.right, node, deep + 1);
//                 if (xFound && yFound) {
//                     break;
//                 }
//             }
//         } while (!queue.isEmpty());

//         if (xDep == yDep && xParent != yParent) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     private void update(TreeNode node, TreeNode parent, int deep) {
//         if (node.val == x) {
//             xDep = deep;
//             xFound = true;
//             xParent = parent;
//         }
//         if (node.val == y) {
//             yDep = deep;
//             yFound = true;
//             yParent = parent;
//         }
//     }
// }
// @lc code=end

