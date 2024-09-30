function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function cycleNode(head) {
    if (!head || !head.next) {
        return false;
    }
    let first = head;
    let second = head;
    while(first != null && first.next != null){

        first = first.next.next;
        second = second.next;
        //两指针相遇，则返回相遇的结点 
        if(first == second)
            return first;
    }
    //链表无环，则返回null
    return null;
}

function getCycleLength(head){

    let node = cycleNode(head);
    //node为空则代表链表无环
    if(node == null)
        return 0;
    console.log(node.val)
    let length=1;
    let current = node.next;
    //再次相遇则循环结束
    while(current != node){
        length++;
        current = current.next;
    }

    return length;

}

let head = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // 创建一个环

console.log("链表环的长度为：", getCycleLength(head))