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

    if (cur == null) {
        return null
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
    let links = ""
    for(let i = 0; i < count; i++) {
        if (i == count - 1) {
            nodes[i].next = null
            links += nodes[i].val
        } else {
            nodes[i].next = nodes[i + 1];
            links += nodes[i].val +" --> "
        }
    }
    console.log("链表：", links)
    let k = 11
    // let k = 2
    console.log("链表倒数第" + k + "个结点：", findLastKNode(k, nodes[0])?.val)
}
main();