/*
 * @lc app=leetcode.cn id=303 lang=java
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start

// class NumArray {
//     private int[] nums = null;
//     public NumArray(int[] nums) {
//         this.nums = nums;
//     }
    
//     public int sumRange(int left, int right) {
//         int count = 0;
//         for (int i = left; i <= right; i ++) {
//             count += this.nums[i];
//         }
//         return count;
//     }
// }

class NumArray {
    private int[] sums = null;
    public NumArray(int[] nums) {
        this.sums = new int[nums.length + 1];
        for (int i = 0; i < nums.length; i ++) {
            this.sums[i + 1] = this.sums[i] + nums[i];
        }
    }
    
    public int sumRange(int left, int right) {
        return this.sums[right + 1] - this.sums[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */
// @lc code=end

// 复杂度分析

// 时间复杂度：初始化 O(n)O(n)O(n)，每次检索 O(1)O(1)O(1)，其中 nnn 是数组 nums\textit{nums}nums 的长度。
// 初始化需要遍历数组 nums\textit{nums}nums 计算前缀和，时间复杂度是 O(n)O(n)O(n)。
// 每次检索只需要得到两个下标处的前缀和，然后计算差值，时间复杂度是 O(1)O(1)O(1)。

// 空间复杂度：O(n)O(n)O(n)，其中 nnn 是数组 nums\textit{nums}nums 的长度。需要创建一个长度为 n+1n+1n+1 的前缀和数组。
