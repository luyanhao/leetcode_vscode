class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function findLastKNode(k, head) {
    let cur=head;
    let now=head;
    let i=0;
    while(cur!=null & i++<k){
        cur=cur.next;
    }

    while(cur!=null){
        now=now.next;
        cur=cur.next;
    }
    return now
}

function main() {
    let nodes = [];
    let count = 10;
    for(let i = 0; i < count; i++) {
        nodes[i] = new ListNode(i);
    }
    for(let i = 0; i < count; i++) {
        if (i == count - 1) {
            nodes[i].next = null
        } else {
            nodes[i].next = nodes[i + 1];
        }
    }
    let k = 10
    console.log("链表倒数第K个结点：", findLastKNode(k, nodes[0]).val)
}
main();