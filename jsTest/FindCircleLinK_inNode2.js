class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}



function findCycleInNode(head) {
// TODO
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast)
        break
    }
    if(!fast || !fast.next)
        return null
    slow = head
    while(slow !== fast){
        slow = slow.next
        fast = fast.next
    }
    return slow
}

function main() {
    let nodes = [];
    let count = 10;
    for(let i = 0; i < count; i++) {
        nodes[i] = new ListNode(i);
    }
    for(let i = 0; i < count; i++) {
        if (i == count - 1) {
            nodes[i].next = nodes[6]
        } else {
            nodes[i].next = nodes[i + 1];
        }
    }

    console.log("链表环的入口结点：", findCycleInNode(nodes[0])?.val)
}
main();