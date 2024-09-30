class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
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

function findCycleInNode(head) {
    let length = getCycleLength(head)
    if (length == 0) return null;
    console.log("链表环的长度：", length)

    let first = head;
    let second = head;
    while(true){
        if (length < 0) {
            first = first.next.next
            second = second.next
            if (first == second) {
                return first
            }
        } else {
            second = second.next
            length = length - 1
        }
    }
}

function main() {
    let nodes = [];
    let count = 10;
    for(let i = 0; i < count; i++) {
        nodes[i] = new ListNode(i);
    }
    for(let i = 0; i < count; i++) {
        if (i == count - 1) {
            nodes[i].next = nodes[1]
        } else {
            nodes[i].next = nodes[i + 1];
        }
    }

    console.log("链表环的入口结点：", findCycleInNode(nodes[0]).val)
}
main();