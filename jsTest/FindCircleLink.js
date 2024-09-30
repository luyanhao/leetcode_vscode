function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}

let head = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // 创建一个环
console.log(hasCycle(head)); // 输出: true